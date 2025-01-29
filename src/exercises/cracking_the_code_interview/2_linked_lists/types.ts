export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  length: number;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = head;
    this.length = head ? 1 : 0;
  }

  push(value: T) {
    const newNode: Node<T> = { value };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  visit(callback: (node: Node<T>) => void) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  print() {
    const values: T[] = [];
    this.visit((node) => values.push(node.value));
    console.log(values.join(" -> "));
  }

  toArray(): T[] {
    const values: T[] = [];
    this.visit((node) => values.push(node.value));
    return values;
  }
}

export function createLinkedList(arr: number[]): LinkedList<number> {
  const list = new LinkedList<number>();
  arr.forEach((num) => list.push(num));
  return list;
}
