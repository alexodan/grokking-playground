import { describe, expect, it } from "bun:test";
import { isUnique } from "./1_is_unique";

describe("1_is_unique", () => {
  it("should return true for non unique string", () => {
    expect(isUnique("abcdefg")).toBeTrue();
  });

  it("should return true for empty", () => {
    expect(isUnique("")).toBeTrue();
  });

  it("should return false for repeated", () => {
    expect(isUnique("aa")).toBeFalse();
  });
});
