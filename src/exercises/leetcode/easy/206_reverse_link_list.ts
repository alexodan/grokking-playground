// https://www.loom.com/share/85ce5a2fcfb14eedb068c81c1c127142
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  insert(val: number) {
    let aux: ListNode | null = this;
    while (aux.next) {
      aux = aux.next;
    }
    aux.next = new ListNode(val, null);
  }
  print() {
    let aux: ListNode | null = this;
    while (aux) {
      console.log(aux.val);
      aux = aux.next;
    }
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let aux = head;
  let rev = head;
  let out = rev;
  let stack: number[] = [];
  while (aux) {
    stack.push(aux.val);
    aux = aux.next;
  }
  while (rev && stack.length > 0) {
    rev.val = stack.pop()!;
    rev = rev.next;
  }
  return out;
}

let list = new ListNode(1, null);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

let reversed = reverseList(list);

reversed?.print();
