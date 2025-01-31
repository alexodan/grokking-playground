import { describe, expect, test } from "bun:test";
import { LinkedList, ListNode } from "./types";
import { findIntersection } from "./7_lists_intersection";

describe("findIntersection", () => {
  test("returns null when lists don't intersect", () => {
    const list1 = new LinkedList<number>();
    list1.push(1);
    list1.push(2);
    list1.push(3);

    const list2 = new LinkedList<number>();
    list2.push(4);
    list2.push(5);
    list2.push(6);

    expect(findIntersection(list1, list2)).toBeNull();
  });

  test("finds intersection at the beginning of both lists", () => {
    const commonNode = new ListNode(1);

    const list1 = new LinkedList<number>();
    list1.head = commonNode;
    list1.tail = commonNode;
    list1.push(2);
    list1.push(3);

    const list2 = new LinkedList<number>();
    list2.head = commonNode;
    list2.tail = commonNode;
    list2.push(4);

    expect(findIntersection(list1, list2)).toBe(commonNode);
  });

  test("finds intersection in the middle of lists", () => {
    const list1 = new LinkedList<number>();
    list1.push(1);
    list1.push(2);

    const commonNode = new ListNode(3);
    let tail1 = list1.head;
    while (tail1?.next) tail1 = tail1.next;
    tail1!.next = commonNode;

    commonNode.next = new ListNode(4);

    const list2 = new LinkedList<number>();
    list2.push(5);
    list2.push(6);

    let tail2 = list2.head;
    while (tail2?.next) tail2 = tail2.next;
    tail2!.next = commonNode;

    expect(findIntersection(list1, list2)).toBe(commonNode);
  });

  test("finds intersection at the end of both lists", () => {
    const list1 = new LinkedList<number>();
    list1.push(1);
    list1.push(2);

    const list2 = new LinkedList<number>();
    list2.push(3);
    list2.push(4);

    const commonNode = new ListNode(5);

    let tail1 = list1.head;
    while (tail1?.next) tail1 = tail1.next;
    tail1!.next = commonNode;

    let tail2 = list2.head;
    while (tail2?.next) tail2 = tail2.next;
    tail2!.next = commonNode;

    expect(findIntersection(list1, list2)).toBe(commonNode);
  });

  test("handles empty lists", () => {
    const list1 = new LinkedList<number>();
    const list2 = new LinkedList<number>();

    expect(findIntersection(list1, list2)).toBeNull();
  });

  test("handles one empty list", () => {
    const list1 = new LinkedList<number>();
    list1.push(1);
    list1.push(2);

    const list2 = new LinkedList<number>();

    expect(findIntersection(list1, list2)).toBeNull();
  });

  test("handles lists of different lengths", () => {
    const list1 = new LinkedList<number>();
    list1.push(1);
    list1.push(2);
    list1.push(3);
    list1.push(4);

    const commonNode = new ListNode(5);
    let tail1 = list1.head;
    while (tail1?.next) tail1 = tail1.next;
    tail1!.next = commonNode;

    const list2 = new LinkedList<number>();
    list2.push(9);

    let tail2 = list2.head;
    while (tail2?.next) tail2 = tail2.next;
    tail2!.next = commonNode;

    expect(findIntersection(list1, list2)).toBe(commonNode);
  });

  test("same values but different nodes don't count as intersection", () => {
    const list1 = new LinkedList<number>();
    list1.push(1);
    list1.push(2);
    list1.push(3);

    const list2 = new LinkedList<number>();
    list2.push(1);
    list2.push(2);
    list2.push(3);

    expect(findIntersection(list1, list2)).toBeNull();
  });
});
