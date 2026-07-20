export interface VFSFile {
	name: string;
	flags: number;
	size: number;
	data: ArrayBuffer;
}

export interface MemoryVFSInstance {
	mapNameToFile: Map<string, VFSFile>;
}

export interface SQLite3API {
	OPEN_READONLY: number;
	OPEN_READWRITE: number;
	OPEN_CREATE: number;

	open_v2(dbName: string, flags?: number, vfsName?: string): Promise<number>;
	close(db: number): Promise<void>;
	exec(db: number, sql: string): Promise<void>;

	str_new(db: number, s: string): number;
	str_value(strPtr: number): number;
	str_finish(strPtr: number): void;

	prepare_v2(db: number, sqlPtr: number): Promise<any>;
	reset(stmt: any): number;
	step(stmt: any): Promise<number>;
	row(stmt: any): any[];
	finalize(stmt: any): Promise<void>;

	bind_null(stmt: any, index: number): number;
	bind_double(stmt: any, index: number, val: number): number;
	bind_text(stmt: any, index: number, val: string): number;

	vfs_register(vfs: any, makeDefault: boolean): number;
}

export interface SQLiteModuleAPI {
	SQLITE_ROW: number;
	SQLITE_DONE: number;
	Factory(module: any): SQLite3API;
}

export class SQLiteService {
	sqlite3: SQLite3API | null = null;
	db: number | null = null;
	dbName: string = 'vyasa-v3';
	SQLiteModule: SQLiteModuleAPI | null = null;
	memoryVfs: MemoryVFSInstance | null = null;
	wasmModule: any = null;
	SQLite: SQLiteModuleAPI | null = null;

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

		this.SQLiteModule = SQLite as unknown as SQLiteModuleAPI;
		this.SQLite = SQLite as unknown as SQLiteModuleAPI;

		const module = await SQLiteAsyncESMFactory({
			locateFile: () => {
				return wasmUrl;
			}
		});

		this.wasmModule = module;
		this.sqlite3 = SQLite.Factory(module) as unknown as SQLite3API;

		this.memoryVfs = new MemoryVFS() as unknown as MemoryVFSInstance;
		this.sqlite3!.vfs_register(this.memoryVfs, false);

		this.db = await this.sqlite3!.open_v2(this.dbName);
	}

	async exec(sql: string) {
		if (!this.db || !this.sqlite3) await this.init();
		await this.sqlite3!.exec(this.db!, sql);
	}

	async query(sql: string) {
		if (!this.db || !this.sqlite3) await this.init();
		try {
			const str = this.sqlite3!.str_new(this.db!, sql);
			const preparedResult = await this.sqlite3!.prepare_v2(this.db!, this.sqlite3!.str_value(str));
			if (!preparedResult) return [];

			const prepared = preparedResult.stmt !== undefined ? preparedResult.stmt : preparedResult;
			const results = [];
			try {
				let stepResult;
				const ROW = this.SQLiteModule!.SQLITE_ROW;
				while ((stepResult = await this.sqlite3!.step(prepared)) === ROW) {
					const row = this.sqlite3!.row(prepared);
					results.push(row);
				}
			} finally {
				await this.sqlite3!.finalize(prepared);
			}
			return results;
		} catch (e) {
			throw e;
		}
	}
}

export const sqliteService = new SQLiteService();
