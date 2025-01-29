import { describe, expect, test } from "bun:test";
import { partition } from "./4_partition";
import { createLinkedList, LinkedList } from "./types";

describe("Linked List Partition", () => {
  test("should handle the example case correctly", () => {
    const input = createLinkedList([3, 5, 8, 5, 10, 2, 1]);
    const result = partition(input, 5);
    const resultArray = result.toArray();

    // Check that all elements less than 5 come before elements >= 5
    const lessThanX = resultArray.filter((n) => n < 5);
    const greaterOrEqualX = resultArray.filter((n) => n >= 5);
    const splitIndex = resultArray.findIndex((n) => n >= 5);

    expect(resultArray.slice(0, splitIndex)).toEqual(
      expect.arrayContaining([3, 2, 1])
    );
    expect(resultArray.slice(splitIndex)).toEqual(
      expect.arrayContaining([5, 5, 8, 10])
    );
  });

  test("should handle empty list", () => {
    const input = new LinkedList<number>();
    const result = partition(input, 5);
    expect(result.length).toBe(0);
    expect(result.head).toBeUndefined();
  });

  test("should handle single element list", () => {
    const input = createLinkedList([1]);
    const result = partition(input, 5);
    expect(result.toArray()).toEqual([1]);
    expect(result.length).toBe(1);
  });

  test("should handle all elements less than x", () => {
    const input = createLinkedList([1, 2, 3, 4]);
    const result = partition(input, 5);
    expect(result.toArray()).toEqual([1, 2, 3, 4]);
    expect(result.length).toBe(4);
  });

  test("should handle all elements greater than or equal to x", () => {
    const input = createLinkedList([5, 6, 7, 8]);
    const result = partition(input, 5);
    expect(result.toArray()).toEqual([5, 6, 7, 8]);
    expect(result.length).toBe(4);
  });

  test("should handle list with equal elements", () => {
    const input = createLinkedList([5, 5, 5, 5]);
    const result = partition(input, 5);
    expect(result.toArray()).toEqual([5, 5, 5, 5]);
    expect(result.length).toBe(4);
  });

  test("should maintain relative order of elements within partitions", () => {
    const input = createLinkedList([1, 4, 3, 2, 5, 2, 3]);
    const result = partition(input, 4);
    const resultArray = result.toArray();
    const splitIndex = resultArray.findIndex((n) => n >= 4);

    // Check that elements less than 4 maintain their relative order
    const lessThanXOrder = resultArray.slice(0, splitIndex);
    expect(lessThanXOrder).toEqual([1, 3, 2, 2, 3]);

    // Check that elements >= 4 maintain their relative order
    const greaterOrEqualXOrder = resultArray.slice(splitIndex);
    expect(greaterOrEqualXOrder).toEqual([4, 5]);
  });

  test("should handle negative numbers", () => {
    const input = createLinkedList([-3, 1, -2, 0, -1, 2]);
    const result = partition(input, 0);
    const resultArray = result.toArray();
    const splitIndex = resultArray.findIndex((n) => n >= 0);

    expect(resultArray.slice(0, splitIndex)).toEqual(
      expect.arrayContaining([-3, -2, -1])
    );
    expect(resultArray.slice(splitIndex)).toEqual(
      expect.arrayContaining([0, 1, 2])
    );
    expect(result.length).toBe(6);
  });

  test("should maintain list integrity", () => {
    const input = createLinkedList([3, 5, 8, 5, 10, 2, 1]);
    const result = partition(input, 5);

    // Check that the list is properly linked
    let current = result.head;
    let count = 0;
    while (current?.next) {
      current = current.next;
      count++;
    }

    // Check that the tail is properly set
    expect(current).toBe(result.tail!);
    expect(count + 1).toBe(result.length);
  });
});
