import { fibonacci } from "../fibonacci";

import { describe, expect, it } from "vitest";

describe("fibonacci", () => {
  it("Check the the 4th number in the fibonnacci sequence is", () => {
    expect(fibonacci(4)).toBe(3);
  });

  it("If the number is negative must throw error", () => {
    expect(() => fibonacci(-1)).toThrowError("No negative numbers allowed");
  });
});
