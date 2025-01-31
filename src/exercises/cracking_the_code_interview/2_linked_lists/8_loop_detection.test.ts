import { expect, test, describe } from "bun:test";
import { ListNode, LinkedList, createLinkedList } from "./types";
import { findLoopStart } from "./8_loop_detection";

function createNodeWithLoop<T>(
  values: T[],
  loopStartIndex: number
): ListNode<T> {
  if (values.length === 0)
    throw new Error("Cannot create loop with empty array");
  if (loopStartIndex >= values.length)
    throw new Error("Loop start index out of bounds");

  const nodes: ListNode<T>[] = values.map((value) => new ListNode(value));

  // Connect nodes
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  // Create loop by connecting last node to loop start node
  nodes[nodes.length - 1].next = nodes[loopStartIndex];

  return nodes[0];
}

describe("Loop Detection", () => {
  test("should return null for empty list", () => {
    const list = new LinkedList<number>();
    expect(findLoopStart(list)).toBe(null);
  });

  test("should return null for single node without loop", () => {
    const list = createLinkedList([1]);
    expect(findLoopStart(list)).toBe(null);
  });

  test("should return null for list without loop", () => {
    const list = createLinkedList([1, 2, 3, 4, 5]);
    expect(findLoopStart(list)).toBe(null);
  });

  test("should detect loop at beginning", () => {
    // Create list: 1 -> 2 -> 3 -> 1 (loops to start)
    const head = createNodeWithLoop([1, 2, 3], 0);
    const list = new LinkedList(head);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe(1);
  });

  test("should detect loop in middle", () => {
    // Create list: A -> B -> C -> D -> E -> C (loops to C)
    const head = createNodeWithLoop(["A", "B", "C", "D", "E"], 2);
    const list = new LinkedList(head);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe("C");
  });

  test("should detect loop at end", () => {
    // Create list: 1 -> 2 -> 3 -> 4 -> 5 -> 5 (loops to last node)
    const head = createNodeWithLoop([1, 2, 3, 4, 5], 4);
    const list = new LinkedList(head);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe(5);
  });

  test("should handle two-node loop", () => {
    // Create list: 1 -> 2 -> 1 (loops to start)
    const head = createNodeWithLoop([1, 2], 0);
    const list = new LinkedList(head);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe(1);
  });

  test("should handle self-loop", () => {
    const node = new ListNode(1);
    node.next = node; // Points to itself
    const list = new LinkedList(node);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe(1);
  });

  test("should detect loop with long prefix", () => {
    // Create list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 3 (loops to node 3)
    const head = createNodeWithLoop([1, 2, 3, 4, 5, 6, 7], 2);
    const list = new LinkedList(head);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe(3);
  });

  test("should handle large loops", () => {
    // Create a large list with 1000 nodes, loop starts at node 500
    const values = Array.from({ length: 1000 }, (_, i) => i + 1);
    const head = createNodeWithLoop(values, 500);
    const list = new LinkedList(head);

    const result = findLoopStart(list);
    expect(result).not.toBe(null);
    expect(result?.value).toBe(501);
  });
});
