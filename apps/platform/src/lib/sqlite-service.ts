export class SQLiteService {
	private sqlite3: any = null;
	private db: number | null = null;
	private dbName: string = 'vyasa-v3';
	private SQLiteModule: any = null;
	private memoryVfs: any = null;
	private wasmModule: any = null;
	private SQLite: any = null;

	async init() {
		if (this.db) return;

		// Dynamic imports to avoid SSR/Build issues
		// @ts-ignore
		const { default: SQLiteAsyncESMFactory } = await import('wa-sqlite/dist/wa-sqlite-async.mjs');
		// @ts-ignore
		const { MemoryVFS } = await import('wa-sqlite/src/examples/MemoryVFS.js');
		// @ts-ignore
		const SQLite = await import('wa-sqlite');
		// @ts-ignore
		const { default: wasmUrl } = await import('wa-sqlite/dist/wa-sqlite-async.wasm?url');
		
		this.SQLiteModule = SQLite;
		this.SQLite = SQLite;

		const module = await SQLiteAsyncESMFactory({
			locateFile: () => {
				return wasmUrl;
			}
		});

		this.wasmModule = module;
		this.sqlite3 = SQLite.Factory(module);

		this.memoryVfs = new MemoryVFS();
		this.sqlite3.vfs_register(this.memoryVfs, false);

		this.db = await this.sqlite3.open_v2(this.dbName);
	}

	async exec(sql: string) {
		if (!this.db) await this.init();
		await this.sqlite3.exec(this.db, sql);
	}

	async query(sql: string) {
		if (!this.db) await this.init();
		try {
			const str = this.sqlite3.str_new(this.db, sql);
			const preparedResult = await this.sqlite3.prepare_v2(this.db, this.sqlite3.str_value(str));
			if (!preparedResult) return [];

			const prepared = (preparedResult.stmt !== undefined) ? preparedResult.stmt : preparedResult;
			const results = [];
			try {
				let stepResult;
				const ROW = this.SQLiteModule.SQLITE_ROW;
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

export const sqliteService = new SQLiteService();
