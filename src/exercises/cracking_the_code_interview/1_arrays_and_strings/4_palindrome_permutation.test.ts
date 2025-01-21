import { expect, test, describe } from "bun:test";
import { isPalindromePermutation } from "./4_palindrome_permutation";

describe("isPalindromePermutation", () => {
  test("should return true for 'Tact Coa'", () => {
    expect(isPalindromePermutation("Tact Coa")).toBe(true);
  });

  test("should return true for empty string", () => {
    expect(isPalindromePermutation("")).toBe(true);
  });

  test("should return true for single character", () => {
    expect(isPalindromePermutation("a")).toBe(true);
  });

  test("should return true for 'racecar'", () => {
    expect(isPalindromePermutation("racecar")).toBe(true);
  });

  test("should return true for 'Race Car'", () => {
    expect(isPalindromePermutation("Race Car")).toBe(true);
  });

  test("should return false for 'hello'", () => {
    expect(isPalindromePermutation("hello")).toBe(false);
  });

  test("should return true for 'aab'", () => {
    expect(isPalindromePermutation("aab")).toBe(true);
  });

  test("should return false for 'abc'", () => {
    expect(isPalindromePermutation("abc")).toBe(false);
  });
});
