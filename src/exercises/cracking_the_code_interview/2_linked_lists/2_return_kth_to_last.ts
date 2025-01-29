import { LinkedList } from "./types";

// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
export function kthToLast<T>(list: LinkedList<T>, k: number): T | null {
  if (k < 0 || k >= list.length) return null;
  let i = 0;
  let aux = list.head;
  while (i < list.length - k - 1) {
    aux = aux?.next;
    i++;
  }
  return aux?.value !== undefined ? aux.value : null;
}

// Another way of doing it, slow and fast pointer
