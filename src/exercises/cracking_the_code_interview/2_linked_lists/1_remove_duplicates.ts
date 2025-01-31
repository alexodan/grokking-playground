// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?
import { LinkedList, ListNode } from "./types";
// 1->3->1->2 => 1->3->2
// 1->1->1 => 1
// 1->4->4 => 1->4
// 3->1->3->2->1
export function removeDuplicates(list: LinkedList<number>) {
  if (!list.head) {
    return;
  }
  let head: ListNode<number> | undefined = list.head;
  let seen = new Set([head.value]);
  while (head?.next) {
    if (seen.has(head.next.value)) {
      head.next = head.next.next;
      list.length--;
    } else {
      seen.add(head.value);
      head = head.next;
    }
  }
}
