// LinkedList.test.ts
import { expect, test, describe } from "bun:test";
import { LinkedList } from "./types";
import { removeDuplicates } from "./1_remove_duplicates";

describe("LinkedList", () => {
  test("should create an empty linked list", () => {
    const list = new LinkedList<number>();
    expect(list.head).toBeUndefined();
    expect(list.tail).toBeUndefined();
    expect(list.length).toBe(0);
  });

  test("should push values to the list", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.length).toBe(3);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(3);
  });

  test("should remove duplicates from unsorted list", () => {
    const list = new LinkedList<number>();
    list.push(3);
    list.push(1);
    list.push(3);
    list.push(2);
    list.push(1);

    removeDuplicates(list);

    // Get all values using visit method
    const values: number[] = [];
    list.visit((node) => values.push(node.value));

    expect(values).toEqual([3, 1, 2]);
    expect(list.length).toBe(3);
  });

  test("should handle empty list when removing duplicates", () => {
    const list = new LinkedList<number>();
    removeDuplicates(list);
    expect(list.length).toBe(0);
  });

  test("should handle list with no duplicates", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    list.push(3);

    removeDuplicates(list);

    const values: number[] = [];
    list.visit((node) => values.push(node.value));

    expect(values).toEqual([1, 2, 3]);
    expect(list.length).toBe(3);
  });

  test("should handle list with all duplicate values", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(1);
    list.push(1);

    removeDuplicates(list);

    const values: number[] = [];
    list.visit((node) => values.push(node.value));

    expect(values).toEqual([1]);
    expect(list.length).toBe(1);
  });
});
