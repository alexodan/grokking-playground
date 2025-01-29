import { describe, expect, test } from "bun:test";
import { LinkedList } from "./types";
import { kthToLast } from "./2_return_kth_to_last";

describe("kthToLast", () => {
  test("should return null for empty list", () => {
    const list = new LinkedList<number>();
    expect(kthToLast(list, 1)).toBe(null);
  });

  test("should return null for negative k", () => {
    const list = new LinkedList<number>();
    list.push(1);
    expect(kthToLast(list, -1)).toBe(null);
  });

  test("should return null when k is larger than list length", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    expect(kthToLast(list, 2)).toBe(null);
  });

  test("should return last element when k is 0", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(kthToLast(list, 0)).toBe(3);
  });

  test("should return second to last element when k is 1", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(kthToLast(list, 1)).toBe(2);
  });

  test("should work with strings", () => {
    const list = new LinkedList<string>();
    list.push("a");
    list.push("b");
    list.push("c");
    list.push("d");
    expect(kthToLast(list, 2)).toBe("b");
  });

  test("should work with single element list", () => {
    const list = new LinkedList<number>();
    list.push(1);
    expect(kthToLast(list, 0)).toBe(1);
    expect(kthToLast(list, 1)).toBe(null);
  });

  test("should handle long lists", () => {
    const list = new LinkedList<number>();
    for (let i = 1; i <= 10; i++) {
      list.push(i);
    }
    expect(kthToLast(list, 4)).toBe(6);
  });
});
