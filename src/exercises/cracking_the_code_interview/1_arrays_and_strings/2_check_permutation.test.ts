import { describe, expect, it } from "bun:test";
import { isPermutation } from "./2_check_permutation";

describe("2 check permutation", () => {
  it("returns true for permutation", () => {
    expect(isPermutation("abcde", "edcba"));
  });

  it("returns false for permutation", () => {
    expect(isPermutation("abcde", "dcba"));
  });

  it("returns false for permutation", () => {
    expect(isPermutation("abcd", "abcde"));
  });
});
