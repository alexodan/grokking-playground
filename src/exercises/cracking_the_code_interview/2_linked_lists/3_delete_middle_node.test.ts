import { describe, expect, test } from "bun:test";
import { LinkedList, ListNode } from "./types";
import { deleteMiddleNode } from "./3_delete_middle_node";

describe("deleteMiddleNode", () => {
  test("should delete middle node", () => {
    const list = new LinkedList<string>();
    list.push("a");
    list.push("b");
    list.push("c");
    list.push("d");
    list.push("e");

    let nodeToDelete: ListNode<string> | undefined = list.head;
    for (let i = 0; i < 2; i++) {
      nodeToDelete = nodeToDelete?.next;
    }

    deleteMiddleNode(nodeToDelete!);

    const result: string[] = [];
    list.visit((node) => result.push(node.value));
    expect(result).toEqual(["a", "b", "d", "e"]);
  });

  test("should work with longer list", () => {
    const list = new LinkedList<string>();
    const values = ["a", "b", "c", "d", "e", "f", "g", "h"];
    values.forEach((v) => list.push(v));

    let nodeToDelete: ListNode<string> | undefined = list.head;
    for (let i = 0; i < 4; i++) {
      nodeToDelete = nodeToDelete?.next;
    }

    deleteMiddleNode(nodeToDelete!);

    const result: string[] = [];
    list.visit((node) => result.push(node.value));
    expect(result).toEqual(["a", "b", "c", "d", "f", "g", "h"]);
  });

  test("should work with different data types", () => {
    const list = new LinkedList<number>();
    [1, 2, 3, 4, 5].forEach((n) => list.push(n));

    let nodeToDelete: ListNode<number> | undefined = list.head;
    for (let i = 0; i < 2; i++) {
      nodeToDelete = nodeToDelete?.next;
    }

    deleteMiddleNode(nodeToDelete!);

    const result: number[] = [];
    list.visit((node) => result.push(node.value));
    expect(result).toEqual([1, 2, 4, 5]);
  });

  test("should maintain correct next pointers", () => {
    const list = new LinkedList<string>();
    ["a", "b", "c", "d", "e"].forEach((v) => list.push(v));

    let nodeToDelete: ListNode<string> | undefined = list.head;
    for (let i = 0; i < 2; i++) {
      nodeToDelete = nodeToDelete?.next;
    }

    deleteMiddleNode(nodeToDelete!);

    let current = list.head;
    const values: string[] = [];
    while (current?.next) {
      expect(current.next.value).toBeDefined();
      current = current.next;
      values.push(current.value);
    }
    expect(values).toEqual(["b", "d", "e"]);
  });
});
