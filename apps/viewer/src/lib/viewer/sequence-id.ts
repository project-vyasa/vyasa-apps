/** Coerce SQL / JS sequence ids to the bigint wasm-bindgen expects for i64. */
export function toSequenceId(value: unknown): bigint {
	if (typeof value === 'bigint') return value;
	if (typeof value === 'number' && Number.isInteger(value)) return BigInt(value);
	if (typeof value === 'string' && /^-?\d+$/.test(value)) return BigInt(value);
	throw new TypeError(`Cannot coerce sequence id to BigInt: ${String(value)}`);
}
