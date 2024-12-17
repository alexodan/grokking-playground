interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

class Node<T> {
  public value: T;
  public next: Node<T> | null = null;

  constructor(val: T, next?: Node<T>) {
    this.value = val;
    if (next) {
      this.next = next;
    }
  }
}

export class Stack<T> implements IStack<T> {
  private head: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // a -> b -> c
  push(value: T): void {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    let val = this.head.value;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
