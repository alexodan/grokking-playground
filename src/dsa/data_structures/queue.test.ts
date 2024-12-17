import { expect, test, describe } from "bun:test";
import { Queue } from "./queue";

describe("Queue", () => {
  describe("initialization", () => {
    test("should create an empty queue", () => {
      const queue = new Queue<number>();
      expect(queue.isEmpty()).toBe(true);
      expect(queue.size()).toBe(0);
      expect(queue.peek()).toBeUndefined();
    });
  });

  describe("enqueue", () => {
    test("should add item to empty queue", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      expect(queue.size()).toBe(1);
      expect(queue.peek()).toBe(1);
    });

    test("should maintain FIFO order when adding multiple items", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size()).toBe(3);
      expect(queue.peek()).toBe(1);
    });

    test("should handle different data types", () => {
      const queue = new Queue<string>();
      queue.enqueue("first");
      queue.enqueue("second");
      expect(queue.size()).toBe(2);
      expect(queue.peek()).toBe("first");
    });

    test("should handle large number of items", () => {
      const queue = new Queue<number>();
      for (let i = 0; i < 1000; i++) {
        queue.enqueue(i);
      }
      expect(queue.size()).toBe(1000);
      expect(queue.peek()).toBe(0);
    });
  });

  describe("deque", () => {
    test("should return undefined when dequeing from empty queue", () => {
      const queue = new Queue<number>();
      expect(queue.deque()).toBeUndefined();
      expect(queue.size()).toBe(0);
    });

    test("should remove and return first item", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.deque()).toBe(1);
      expect(queue.size()).toBe(1);
      expect(queue.peek()).toBe(2);
    });

    test("should maintain FIFO order when dequeing multiple items", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.deque()).toBe(1);
      expect(queue.deque()).toBe(2);
      expect(queue.deque()).toBe(3);
      expect(queue.isEmpty()).toBe(true);
    });

    test("should handle alternating enqueue and deque operations", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.deque()).toBe(1);
      queue.enqueue(3);
      expect(queue.deque()).toBe(2);
      expect(queue.deque()).toBe(3);
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe("peek", () => {
    test("should return undefined for empty queue", () => {
      const queue = new Queue<number>();
      expect(queue.peek()).toBeUndefined();
    });

    test("should return first item without removing it", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
      expect(queue.size()).toBe(2);
    });

    test("should consistently return first item after multiple operations", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      expect(queue.peek()).toBe(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
      queue.deque();
      expect(queue.peek()).toBe(2);
    });
  });

  describe("size", () => {
    test("should return 0 for empty queue", () => {
      const queue = new Queue<number>();
      expect(queue.size()).toBe(0);
    });

    test("should return correct size after enqueue operations", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      expect(queue.size()).toBe(1);
      queue.enqueue(2);
      expect(queue.size()).toBe(2);
    });

    test("should return correct size after deque operations", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.deque();
      expect(queue.size()).toBe(1);
      queue.deque();
      expect(queue.size()).toBe(0);
    });

    test("should handle size changes with mixed operations", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.deque();
      queue.enqueue(3);
      queue.enqueue(4);
      queue.deque();
      expect(queue.size()).toBe(2);
    });
  });

  describe("isEmpty", () => {
    test("should return true for new queue", () => {
      const queue = new Queue<number>();
      expect(queue.isEmpty()).toBe(true);
    });

    test("should return false after enqueueing", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      expect(queue.isEmpty()).toBe(false);
    });

    test("should return true after all items dequed", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.deque();
      queue.deque();
      expect(queue.isEmpty()).toBe(true);
    });

    test("should correctly reflect empty state with mixed operations", () => {
      const queue = new Queue<number>();
      expect(queue.isEmpty()).toBe(true);
      queue.enqueue(1);
      expect(queue.isEmpty()).toBe(false);
      queue.deque();
      expect(queue.isEmpty()).toBe(true);
      queue.enqueue(2);
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("edge cases", () => {
    test("should handle enqueueing undefined", () => {
      const queue = new Queue<number | undefined>();
      queue.enqueue(undefined);
      expect(queue.size()).toBe(1);
      expect(queue.deque()).toBeUndefined();
    });

    test("should handle enqueueing null", () => {
      const queue = new Queue<number | null>();
      queue.enqueue(null);
      expect(queue.size()).toBe(1);
      expect(queue.deque()).toBeNull();
    });

    test("should handle rapid enqueue/deque operations", () => {
      const queue = new Queue<number>();
      for (let i = 0; i < 100; i++) {
        queue.enqueue(i);
        expect(queue.deque()).toBe(i);
      }
      expect(queue.isEmpty()).toBe(true);
    });
  });
});
