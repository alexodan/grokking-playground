// Loop Detection: Given a circular linked list, implement an algorithm
// that returns the node at the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points
// to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> 0 -> E -> C (the same C as earlier)
// Output: C

import { LinkedList, ListNode } from "./types";

// O(n)
export function findLoopStart<T>(list: LinkedList<T>): ListNode<T> | null {
  let startOfLoop = null;
  let set = new Set<ListNode<T>>();
  let aux = list.head;
  while (aux) {
    if (set.has(aux)) {
      return aux;
    } else {
      set.add(aux);
    }
    aux = aux.next;
  }
  return startOfLoop;
}
