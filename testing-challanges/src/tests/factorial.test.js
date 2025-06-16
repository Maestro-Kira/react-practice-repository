import { it, describe, expect } from "vitest";

import { factorial } from "../factorial";

describe("factorial", () => {
  it("factorial of 6 = 720", () => {
    expect(factorial(6)).toBe(720);
  });

  it("Throw error if n is negative", () => {
    expect(() => factorial(-2)).toThrowError(
      "Negative numbers are not allowed"
    );
  });
});
