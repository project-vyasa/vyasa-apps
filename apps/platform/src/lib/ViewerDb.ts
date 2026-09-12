import { sqliteService, type SQLite3API } from './sqlite-service';

export class ViewerDb {
	private sqlite3: SQLite3API | null = null;
	private db: number | null = null;
	private dbName: string = 'viewer-db-temp';
	/** wa-sqlite connections are not safe to prepare/step concurrently. */
	#opTail: Promise<void> = Promise.resolve();

	#enqueue<T>(op: () => Promise<T>): Promise<T> {
		const run = this.#opTail.then(op, op);
		this.#opTail = run.then(
			() => undefined,
			() => undefined
		);
		return run;
	}

	async loadFromUrl(url: string) {
		// Fetch the sqlite file
		let res;
		try {
			res = await fetch(url);
		} catch (e: any) {
			throw new Error(`Failed to fetch publication DB from ${url}: ${e.message}`);
		}

		if (!res.ok) {
			throw new Error(`Failed to fetch publication DB from ${url} (Status: ${res.status})`);
		}

		const buffer = await res.arrayBuffer();

		// We reuse the WASM initialization from the existing service
		if (!sqliteService.sqlite3) {
			await sqliteService.init();
		}
		this.sqlite3 = sqliteService.sqlite3;

		// Close previous if exists
		await this.close();

		// Generate a unique dbName to prevent schema caching issues when switching DBs
		this.dbName = `viewer-db-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

		// Populate MemoryVFS directly
		const memoryVfs = sqliteService.memoryVfs;
		if (memoryVfs) {
			memoryVfs.mapNameToFile.set(this.dbName, {
				name: this.dbName,
				flags: 0,
				size: buffer.byteLength,
				data: buffer
			});
		}

		// Open a memory DB (without OPEN_CREATE so it must use our file)
		if (!this.sqlite3) throw new Error('SQLite not initialized');
		this.db = await this.sqlite3.open_v2(this.dbName, this.sqlite3.OPEN_READONLY, 'memory');
	}

	async close() {
		return this.#enqueue(async () => {
			if (this.db && this.sqlite3) {
				await this.sqlite3.close(this.db);
				this.db = null;

				const memoryVfs = sqliteService.memoryVfs;
				if (memoryVfs && memoryVfs.mapNameToFile.has(this.dbName)) {
					memoryVfs.mapNameToFile.delete(this.dbName);
				}
			}
		});
	}

	async query(sql: string, params: unknown[] = []) {
		if (!sql || sql.trim() === '') return [];
		return this.#enqueue(() => this.#queryNow(sql, params));
	}

	async #queryNow(sql: string, params: unknown[] = []) {
		if (!this.db || !this.sqlite3) throw new Error('DB not loaded');
		try {
			const str = this.sqlite3.str_new(this.db, sql);
			let preparedResult;
			try {
				preparedResult = await this.sqlite3.prepare_v2(this.db, this.sqlite3.str_value(str));
			} finally {
				this.sqlite3.str_finish(str);
			}
			if (!preparedResult) return [];

			const prepared = preparedResult.stmt !== undefined ? preparedResult.stmt : preparedResult;
			const results = [];

			// Re-bind params
			this.sqlite3.reset(prepared);
			for (let i = 0; i < params.length; i++) {
				const val = params[i];
				if (val === null || val === undefined) this.sqlite3.bind_null(prepared, i + 1);
				else if (typeof val === 'number') this.sqlite3.bind_double(prepared, i + 1, val);
				else this.sqlite3.bind_text(prepared, i + 1, String(val));
			}

			try {
				let stepResult;
				const SQLiteModule = sqliteService.SQLiteModule;
				const ROW = SQLiteModule ? SQLiteModule.SQLITE_ROW : 100;
				while ((stepResult = await this.sqlite3.step(prepared)) === ROW) {
					const row = this.sqlite3.row(prepared);
					results.push(row);
				}
			} finally {
				await this.sqlite3.finalize(prepared);
			}
			return results;
		} catch (e) {
			throw e;
		}
	}
}
