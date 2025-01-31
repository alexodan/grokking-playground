import { LinkedList } from "./types";

// Palindrome: Implement a function to check if a linked list is a palindrome.
export function isPalindrome<T>(list: LinkedList<T>): boolean {
  let stack = [];
  let isPair = list.length % 2 === 0;
  let mid = isPair ? list.length / 2 - 1 : (list.length - 1) / 2;
  let aux = list.head;
  let i = 0;
  while (i < mid && aux) {
    let val = aux.value;
    stack.push(val);
    aux = aux.next;
    i++;
  }
  if (isPair) {
    i++;
    if (aux?.value !== aux?.next?.value) {
      return false;
    }
    aux = aux?.next;
  }
  i++;
  aux = aux?.next;
  while (i < list.length && aux) {
    if (stack.pop() !== aux.value) {
      return false;
    }
    aux = aux.next;
    i++;
  }
  return true;
}
