import { expect, test, describe } from "bun:test";
import { Stack } from "./stack";

describe("Stack", () => {
  describe("initialization", () => {
    test("should create an empty stack", () => {
      const stack = new Stack<number>();
      expect(stack.isEmpty()).toBe(true);
      expect(stack.size()).toBe(0);
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe("push", () => {
    test("should add item to empty stack", () => {
      const stack = new Stack<number>();
      stack.push(1);
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
    });

    test("should maintain LIFO order when adding multiple items", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size()).toBe(3);
      expect(stack.peek()).toBe(3); // Last item should be on top
    });

    test("should handle different data types", () => {
      const stack = new Stack<string>();
      stack.push("first");
      stack.push("second");
      expect(stack.size()).toBe(2);
      expect(stack.peek()).toBe("second"); // Last pushed item
    });

    test("should handle many items", () => {
      const stack = new Stack<number>();
      for (let i = 0; i < 10; i++) {
        stack.push(i);
      }
      expect(stack.size()).toBe(10);
      expect(stack.peek()).toBe(9); // Last pushed item
    });
  });

  describe("pop", () => {
    test("should return undefined when popping from empty stack", () => {
      const stack = new Stack<number>();
      expect(stack.pop()).toBeUndefined();
      expect(stack.size()).toBe(0);
    });

    test("should remove and return top item", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toBe(2);
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
    });

    test("should maintain LIFO order when popping multiple items", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBe(true);
    });

    test("should handle alternating push and pop operations", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toBe(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("peek", () => {
    test("should return undefined for empty stack", () => {
      const stack = new Stack<number>();
      expect(stack.peek()).toBeUndefined();
    });

    test("should return top item without removing it", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
      expect(stack.size()).toBe(2);
    });

    test("should consistently return top item after multiple operations", () => {
      const stack = new Stack<number>();
      stack.push(1);
      expect(stack.peek()).toBe(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
      stack.pop();
      expect(stack.peek()).toBe(1);
    });
  });

  describe("size", () => {
    test("should return 0 for empty stack", () => {
      const stack = new Stack<number>();
      expect(stack.size()).toBe(0);
    });

    test("should return correct size after push operations", () => {
      const stack = new Stack<number>();
      stack.push(1);
      expect(stack.size()).toBe(1);
      stack.push(2);
      expect(stack.size()).toBe(2);
    });

    test("should return correct size after pop operations", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      stack.pop();
      expect(stack.size()).toBe(1);
      stack.pop();
      expect(stack.size()).toBe(0);
    });

    test("should handle size changes with mixed operations", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      stack.pop();
      stack.push(3);
      stack.push(4);
      stack.pop();
      expect(stack.size()).toBe(2);
    });
  });

  describe("isEmpty", () => {
    test("should return true for new stack", () => {
      const stack = new Stack<number>();
      expect(stack.isEmpty()).toBe(true);
    });

    test("should return false after pushing", () => {
      const stack = new Stack<number>();
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
    });

    test("should return true after all items popped", () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });

    test("should correctly reflect empty state with mixed operations", () => {
      const stack = new Stack<number>();
      expect(stack.isEmpty()).toBe(true);
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
      stack.push(2);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe("edge cases", () => {
    test("should handle pushing undefined", () => {
      const stack = new Stack<number | undefined>();
      stack.push(undefined);
      expect(stack.size()).toBe(1);
      expect(stack.pop()).toBeUndefined();
    });

    test("should handle pushing null", () => {
      const stack = new Stack<number | null>();
      stack.push(null);
      expect(stack.size()).toBe(1);
      expect(stack.pop()).toBeNull();
    });

    test("should handle pushing and popping many items quickly", () => {
      const stack = new Stack<number>();
      for (let i = 0; i < 100; i++) {
        stack.push(i);
      }
      for (let i = 99; i >= 0; i--) {
        expect(stack.pop()).toBe(i);
      }
      expect(stack.isEmpty()).toBe(true);
    });
  });
});
