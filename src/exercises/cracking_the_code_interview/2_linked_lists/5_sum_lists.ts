import { LinkedList } from "./types";
// Sum Lists: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored
// in reverse order, such that the 1's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// EXAMPLE
// Input: (7->1->6) + (5->9->2). That is, 617 + 295. Output: 2->1->9. That is, 912.

// FOLLOW UP

// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6->1->7) + (2->9->5). That is,617 + 295. Output: 9->1->2. That is, 912.
export function sumListsReverse(
  l1: LinkedList<number>,
  l2: LinkedList<number>
) {
  let sum = new LinkedList<number>();
  let carry = 0;
  let p1 = l1.head;
  let p2 = l2.head;
  while (p1 || p2 || carry) {
    let v1 = p1?.value ?? 0;
    let v2 = p2?.value ?? 0;
    let res = v1 + v2 + carry;
    carry = res >= 10 ? 1 : 0;
    sum.push(res >= 10 ? res - 10 : res); // 2->1->9
    p1 = p1?.next;
    p2 = p2?.next;
  }
  return sum;
}

export function sumListsForward(
  l1: LinkedList<number>,
  l2: LinkedList<number>
) {
  let sum = new LinkedList<number>();

  return sum;
}
