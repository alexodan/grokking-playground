import { expect, test, describe } from "bun:test";
import { LinkedList } from "./types";
import { isPalindrome } from "./6_is_palindrome";

function createList<T>(values: T[]): LinkedList<T> {
  const list = new LinkedList<T>();
  values.forEach((val) => list.push(val));
  return list;
}

describe("Linked List Palindrome", () => {
  test("should return true for single character", () => {
    const list = createList(["a"]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should return true for empty list", () => {
    const list = new LinkedList<string>();
    expect(isPalindrome(list)).toBe(true);
  });

  test("should return true for palindrome with even length", () => {
    const list = createList(["a", "b", "b", "a"]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should return true for palindrome with odd length", () => {
    const list = createList(["r", "a", "c", "e", "c", "a", "r"]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should return false for non-palindrome even length", () => {
    const list = createList(["a", "b", "c", "d"]);
    expect(isPalindrome(list)).toBe(false);
  });

  test("should return false for non-palindrome odd length", () => {
    const list = createList(["a", "b", "c", "b", "d"]);
    expect(isPalindrome(list)).toBe(false);
  });

  test("should handle numbers as values", () => {
    const list = createList([1, 2, 3, 2, 1]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should return false for almost palindrome", () => {
    const list = createList(["m", "a", "d", "a", "n"]);
    expect(isPalindrome(list)).toBe(false);
  });

  test("should handle two character palindrome", () => {
    const list = createList(["a", "a"]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should handle two character non-palindrome", () => {
    const list = createList(["a", "b"]);
    expect(isPalindrome(list)).toBe(false);
  });

  test("should handle case-sensitive palindromes", () => {
    const list = createList(["A", "b", "b", "a"]);
    expect(isPalindrome(list)).toBe(false);
  });

  test("should handle longer palindromes", () => {
    const list = createList(["a", "b", "c", "d", "c", "b", "a"]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should handle repeated characters", () => {
    const list = createList(["a", "a", "a", "a"]);
    expect(isPalindrome(list)).toBe(true);
  });

  test("should maintain list integrity", () => {
    const values = ["r", "a", "d", "a", "r"];
    const list = createList(values);
    isPalindrome(list);

    // Verify the list hasn't been modified
    expect(list.toArray()).toEqual(values);
    expect(list.length).toBe(values.length);
  });
});
