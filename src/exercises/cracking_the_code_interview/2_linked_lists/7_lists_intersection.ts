// Lists Intersection: Given two (singly) linked lists, determine if the two lists intersect.
// Return the intersecting node. Note that the intersection is defined based on reference,
// not value. That is, if the Kth node of the first linked list is the exact same node (by
// reference) as the Jth node of the second linked list, then they are intersecting.
import { LinkedList, ListNode } from "./types";

export function findIntersection<T>(
  l1: LinkedList<T>,
  l2: LinkedList<T>
): ListNode<T> | null {
  // 1 - O(n^2) for each node, check the 2nd list
  // 2 - use a Set to store nodes from 1st list - Set<val, Node> O(n) memory
  let map = new Map<string, ListNode<T>[]>();
  let aux = l1.head;
  let intersection = null;
  while (aux) {
    if (!map.get(JSON.stringify(aux.value))) {
      map.set(JSON.stringify(aux.value), []);
    }
    map.set(JSON.stringify(aux.value), [
      ...map.get(JSON.stringify(aux.value))!,
      aux,
    ]);
    aux = aux.next;
  }
  aux = l2.head;
  while (aux) {
    if (map.get(JSON.stringify(aux.value))) {
      let arr = map.get(JSON.stringify(aux.value))!;
      if (arr.includes(aux)) {
        return aux;
      }
    }
    aux = aux.next;
  }
  return intersection;
}
