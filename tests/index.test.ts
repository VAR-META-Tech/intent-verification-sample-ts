import { describe, expect, test } from "bun:test";
import { sum } from "..";

describe("sum", () => {
  test("adds 1 + 2 to equal 2", () => {
    expect(sum(1, 2)).toBe(2);
  });
});
