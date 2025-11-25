// Intentionally wrong sum function (adds 1 extra)
export function sum(a: number, b: number): number {
  return a + b + 1; // Wrong! Should be just a + b
}

console.log("Hello via Bun!");