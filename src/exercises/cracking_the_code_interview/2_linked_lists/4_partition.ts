// Partition: Write code to partition a linked list around a value x, such that all
// nodes less than x come before all nodes greater than or equal to x.
// lf x is contained within the list, the values of x only need to be after the
// elements less than x (see below).The partition element x can appear anywhere in
// the "right partition"; it does not need to appear between the left and right partitions.
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 ->10 -> 2 -> 1 [partition=5]

import { LinkedList } from "./types";

// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
export function partition(
  list: LinkedList<number>,
  x: number
): LinkedList<number> {
  let left = new LinkedList<number>();
  let right = new LinkedList<number>();
  let aux = list.head;
  while (aux) {
    if (aux.value < x) {
      left.push(aux.value);
    } else {
      right.push(aux.value);
    }
    aux = aux.next;
  }
  if (!left.tail) {
    return right;
  }
  if (right.head) {
    left.tail.next = right.head;
    left.tail = right.tail;
    left.length += right.length;
  }
  return left;
}
