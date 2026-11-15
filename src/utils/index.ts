/** Shared pure utilities. Expand as needed in later phases. */

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}
