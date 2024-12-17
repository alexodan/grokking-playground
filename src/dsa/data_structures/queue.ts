interface IQueue<T> {
  enqueue(item: T): void;
  deque(): T | undefined;
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

export class Queue<T> implements IQueue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to tail
  enqueue(item: T): void {
    let node = new Node(item);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  // remove from head
  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    let val = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
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
