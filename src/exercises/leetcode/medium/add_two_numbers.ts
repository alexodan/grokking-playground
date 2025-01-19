import { ListNode } from "../easy/206_reverse_link_list";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode();
  let aux = result;
  let carry = 0;
  while (l1 || l2 || carry) {
    let partial = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    if (partial >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    result.next = new ListNode(partial % 10);
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    result = result.next;
  }
  return aux.next;
}
