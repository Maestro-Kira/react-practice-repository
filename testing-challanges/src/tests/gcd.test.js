import { it, describe, expect } from "vitest";
import { gcd } from "../gcd";

describe("gcd", () => {
  it("If a is 12 and b is 18 common greatest divisor will be 6", () => {
    expect(gcd(12, 18)).toBe(6);
  });
  it("If a is 4 and b is 10 common greatest divisor will be 6", () => {
    expect(gcd(4, 10)).toBe(2);
  });

  it("If a is 0 and b is 10 common greatest divisor will be 6", () => {
    expect(gcd(0, 10)).toBe(1);
  });
});
