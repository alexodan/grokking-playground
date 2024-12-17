interface LinkedList<T> {
  get length(): number;
  insertAt(index: number, value: T): T | undefined;
  removeFirst(value: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(value: T): void;
  prepend(value: T): void;
  get(index: number): T | undefined;
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

export class SimplyLinkedList<T> implements LinkedList<T> {
  private _length = 0;
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  constructor() {}

  get length(): number {
    return this._length;
  }

  insertAt(index: number, value: T): T | undefined {
    // case: out of bounds
    if (index < 0 || index > this._length) {
      return undefined;
    }
    let node = new Node(value);
    // case: insert at head (0th index)
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this._length++;
      return value;
    }
    // case: rest
    let i = 0;
    let current = this.head;
    while (current && i < index - 1) {
      current = current.next;
      i++;
    }
    if (current) {
      node.next = current?.next;
      current.next = node;
      if (!node.next) {
        this.tail = node;
      }
      this._length++;
      return value;
    }
    return undefined;
  }

  removeFirst(value: T): T | undefined {
    // empty list
    if (!this.head) {
      return undefined;
    }
    // remove head
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this._length--;
      return value;
    }
    // remove others
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (!current.next) {
      return undefined;
    }
    if (current.next === this.tail) {
      this.tail = current;
      current.next = null;
    } else {
      let next = current.next;
      current.next = next.next;
    }
    this._length--;
    return value;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }
    if (index === 0) {
      let value = this.head?.value;
      this.head = this.head?.next ?? null;
      if (!this.head) {
        this.tail = null;
      }
      this._length--;
      return value;
    }
    let i = 0;
    let current = this.head as Node<T>;
    while (current.next && i < index - 1) {
      current = current.next;
      i++;
    }
    let next = current.next;
    if (next) {
      current.next = next.next;
      if (!next?.next) {
        this.tail = current;
      }
      this._length--;
    }
    return next?.value;
  }

  append(value: T): void {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._length += 1;
  }

  prepend(value: T): void {
    let newNode = new Node(value, this.head ?? undefined);
    this.head = newNode;
    this._length++;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }
    let current = this.head as Node<T> | null;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }
    return current?.value;
  }
}
