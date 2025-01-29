import { Node } from "./types";

/**
 * Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
 * EXAMPLE
 * Input: the node c from the linked list a->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 */
export function deleteMiddleNode<T>(node: Node<T>): void {
  let curr = node;
  let next = curr.next;
  if (!next) {
    return;
  }
  while (next?.next) {
    curr.value = next.value;
    curr = next;
    next = curr.next;
  }
  if (next) {
    curr.value = next.value;
    curr!.next = undefined;
  }
}
