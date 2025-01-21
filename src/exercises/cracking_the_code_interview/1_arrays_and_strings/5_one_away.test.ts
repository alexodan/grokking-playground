import { expect, test, describe } from "bun:test";
import { isOneAway } from "./5_one_away";

describe("isOneAway", () => {
  // Test exact same strings
  test("identical strings should return true", () => {
    expect(isOneAway("hello", "hello")).toBe(true);
  });

  // Test character replacement
  test("strings with one character replaced should return true", () => {
    expect(isOneAway("pale", "bale")).toBe(true);
    expect(isOneAway("pale", "pile")).toBe(true);
    expect(isOneAway("hello", "hallo")).toBe(true);
  });

  // Test character insertion
  test("strings with one character inserted should return true", () => {
    expect(isOneAway("pale", "pales")).toBe(true);
    expect(isOneAway("ple", "pale")).toBe(true);
    expect(isOneAway("", "a")).toBe(true);
  });

  // Test character deletion
  test("strings with one character deleted should return true", () => {
    expect(isOneAway("pales", "pale")).toBe(true);
    expect(isOneAway("pale", "ple")).toBe(true);
    expect(isOneAway("a", "")).toBe(true);
  });

  // Test false cases
  test("strings with more than one edit should return false", () => {
    expect(isOneAway("pale", "bake")).toBe(false);
    expect(isOneAway("hello", "world")).toBe(false);
    expect(isOneAway("pale", "pa")).toBe(false);
    expect(isOneAway("pale", "pales!")).toBe(false);
  });

  // Test edge cases
  test("edge cases should be handled correctly", () => {
    expect(isOneAway("", "")).toBe(true);
    expect(isOneAway("a", "b")).toBe(true);
    expect(isOneAway("abc", "abcd")).toBe(true);
    expect(isOneAway("abc", "abcde")).toBe(false);
  });

  // Test case sensitivity
  test("should be case sensitive", () => {
    expect(isOneAway("pale", "Pale")).toBe(true);
    expect(isOneAway("pale", "PAle")).toBe(false);
  });

  // Test with special characters
  test("should work with special characters", () => {
    expect(isOneAway("hel!o", "hello")).toBe(true);
    expect(isOneAway("he!!o", "hello")).toBe(false);
    expect(isOneAway("hello!", "hello")).toBe(true);
  });
});
