import { describe, expect, test } from "bun:test";
import { createLinkedList, LinkedList } from "./types";
import { sumListsForward, sumListsReverse } from "./5_sum_lists";

describe("Sum Lists - Reverse Order", () => {
  test("should handle the example case (617 + 295 = 912)", () => {
    const l1 = createLinkedList([7, 1, 6]); // 617
    const l2 = createLinkedList([5, 9, 2]); // 295
    const result = sumListsReverse(l1, l2);
    expect(result.toArray()).toEqual([2, 1, 9]); // 912
  });

  test("should handle lists of different lengths", () => {
    const l1 = createLinkedList([1, 2, 3]); // 321
    const l2 = createLinkedList([4, 5]); // 54
    const result = sumListsReverse(l1, l2);
    expect(result.toArray()).toEqual([5, 7, 3]); // 375
  });

  test("should handle carry over", () => {
    const l1 = createLinkedList([8, 9, 9]); // 998
    const l2 = createLinkedList([2, 0, 0]); // 002
    const result = sumListsReverse(l1, l2);
    expect(result.toArray()).toEqual([0, 0, 0, 1]); // 1000
  });

  test("should handle empty lists", () => {
    const l1 = new LinkedList<number>();
    const l2 = new LinkedList<number>();
    const result = sumListsReverse(l1, l2);
    expect(result.toArray()).toEqual([]);
  });

  test("should handle single digit numbers", () => {
    const l1 = createLinkedList([3]); // 3
    const l2 = createLinkedList([7]); // 7
    const result = sumListsReverse(l1, l2);
    expect(result.toArray()).toEqual([0, 1]); // 10
  });

  test("should handle when one list is empty", () => {
    const l1 = createLinkedList([1, 2, 3]); // 321
    const l2 = new LinkedList<number>();
    const result = sumListsReverse(l1, l2);
    expect(result.toArray()).toEqual([1, 2, 3]); // 321
  });
});

// describe("Sum Lists - Forward Order", () => {
//   test("should handle the example case (617 + 295 = 912)", () => {
//     const l1 = createLinkedList([6, 1, 7]); // 617
//     const l2 = createLinkedList([2, 9, 5]); // 295
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([9, 1, 2]); // 912
//   });

//   test("should handle lists of different lengths", () => {
//     const l1 = createLinkedList([1, 2]); // 12
//     const l2 = createLinkedList([3, 4, 5]); // 345
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([3, 5, 7]); // 357
//   });

//   test("should handle carry over", () => {
//     const l1 = createLinkedList([9, 9, 9]); // 999
//     const l2 = createLinkedList([1]); // 1
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([1, 0, 0, 0]); // 1000
//   });

//   test("should handle empty lists", () => {
//     const l1 = new LinkedList<number>();
//     const l2 = new LinkedList<number>();
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([]);
//   });

//   test("should handle single digit numbers", () => {
//     const l1 = createLinkedList([3]); // 3
//     const l2 = createLinkedList([7]); // 7
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([1, 0]); // 10
//   });

//   test("should handle when one list is empty", () => {
//     const l1 = createLinkedList([1, 2, 3]); // 123
//     const l2 = new LinkedList<number>();
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([1, 2, 3]); // 123
//   });

//   test("should handle numbers with leading zeros", () => {
//     const l1 = createLinkedList([0, 0, 1]); // 001
//     const l2 = createLinkedList([0, 0, 2]); // 002
//     const result = sumListsForward(l1, l2);
//     expect(result.toArray()).toEqual([3]); // 3
//   });

//   test("should maintain list integrity", () => {
//     const l1 = createLinkedList([1, 2, 3]);
//     const l2 = createLinkedList([4, 5, 6]);
//     const result = sumListsForward(l1, l2);

//     // Check that the list is properly linked
//     let current = result.head;
//     let count = 0;
//     while (current?.next) {
//       current = current.next;
//       count++;
//     }

//     // Check that the tail is properly set
//     expect(current).toBe(result.tail!);
//     expect(count + 1).toBe(result.length);
//   });
// });
