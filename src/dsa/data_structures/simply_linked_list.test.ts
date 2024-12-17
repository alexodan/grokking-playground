import { expect, test, describe } from "bun:test";
import { SimplyLinkedList } from "./simply_linked_list";

describe("SimplyLinkedList", () => {
  describe("initialization", () => {
    test("should create an empty list", () => {
      const list = new SimplyLinkedList<number>();
      expect(list.length).toBe(0);
      expect(list.get(0)).toBeUndefined();
    });
  });

  describe("append", () => {
    test("should append to empty list", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(10);
    });

    test("should maintain correct order when appending multiple values", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.length).toBe(3);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
      expect(list.get(2)).toBe(30);
    });

    test("should handle different data types", () => {
      const list = new SimplyLinkedList<string>();
      list.append("hello");
      list.append("world");
      expect(list.length).toBe(2);
      expect(list.get(0)).toBe("hello");
      expect(list.get(1)).toBe("world");
    });
  });

  describe("prepend", () => {
    test("should prepend to empty list", () => {
      const list = new SimplyLinkedList<number>();
      list.prepend(10);
      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(10);
    });

    test("should prepend to non-empty list", () => {
      const list = new SimplyLinkedList<number>();
      list.append(20);
      list.prepend(10);
      expect(list.length).toBe(2);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
    });

    test("should maintain correct order with multiple prepends", () => {
      const list = new SimplyLinkedList<number>();
      list.prepend(30);
      list.prepend(20);
      list.prepend(10);
      expect(list.length).toBe(3);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
      expect(list.get(2)).toBe(30);
    });
  });

  describe("get", () => {
    test("should return undefined for negative indices", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.get(-1)).toBeUndefined();
    });

    test("should return undefined for out-of-bounds indices", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.get(1)).toBeUndefined();
    });

    test("should return correct values for valid indices", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
      expect(list.get(2)).toBe(30);
    });
  });

  describe("insertAt", () => {
    test("should insert at beginning of empty list", () => {
      const list = new SimplyLinkedList<number>();
      list.insertAt(0, 10);
      expect(list.get(0)).toBe(10);
      expect(list.length).toBe(1);
    });

    test("should insert at beginning of non-empty list", () => {
      const list = new SimplyLinkedList<number>();
      list.append(20);
      list.insertAt(0, 10);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
      expect(list.length).toBe(2);
    });

    test("should insert at middle of list", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(30);
      list.insertAt(1, 20);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
      expect(list.get(2)).toBe(30);
      expect(list.length).toBe(3);
    });

    test("should insert at end of list", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.insertAt(2, 30);
      expect(list.get(2)).toBe(30);
      expect(list.length).toBe(3);
    });

    test("should return undefined for invalid indices", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.insertAt(-1, 20)).toBeUndefined();
      expect(list.insertAt(2, 20)).toBeUndefined();
      expect(list.length).toBe(1);
    });
  });

  describe("removeFirst", () => {
    test("should return undefined when removing from empty list", () => {
      const list = new SimplyLinkedList<number>();
      expect(list.removeFirst(10)).toBeUndefined();
      expect(list.length).toBe(0);
    });

    test("should return undefined when removing non-existent value", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.removeFirst(20)).toBeUndefined();
      expect(list.length).toBe(1);
    });

    test("should remove first occurrence only", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(20);
      list.append(30);
      expect(list.removeFirst(20)).toBe(20);
      expect(list.length).toBe(3);
      expect(list.get(1)).toBe(20);
      expect(list.get(2)).toBe(30);
    });

    test("should remove head element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      expect(list.removeFirst(10)).toBe(10);
      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(20);
    });

    test("should remove tail element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      expect(list.removeFirst(20)).toBe(20);
      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(10);
    });

    test("should handle removing only element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.removeFirst(10)).toBe(10);
      expect(list.length).toBe(0);
      expect(list.get(0)).toBeUndefined();
    });
  });

  describe("removeAt", () => {
    test("should return undefined when removing from empty list", () => {
      const list = new SimplyLinkedList<number>();
      expect(list.removeAt(0)).toBeUndefined();
      expect(list.length).toBe(0);
    });

    test("should return undefined for negative index", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.removeAt(-1)).toBeUndefined();
      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(10);
    });

    test("should return undefined for out of bounds index", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.removeAt(1)).toBeUndefined();
      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(10);
    });

    test("should remove first element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.removeAt(0)).toBe(10);
      expect(list.length).toBe(2);
      expect(list.get(0)).toBe(20);
      expect(list.get(1)).toBe(30);
    });

    test("should remove last element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.removeAt(2)).toBe(30);
      expect(list.length).toBe(2);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
    });

    test("should remove middle element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.removeAt(1)).toBe(20);
      expect(list.length).toBe(2);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(30);
    });

    test("should remove only element", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      expect(list.removeAt(0)).toBe(10);
      expect(list.length).toBe(0);
      expect(list.get(0)).toBeUndefined();
    });

    test("should handle consecutive removals", () => {
      const list = new SimplyLinkedList<number>();
      list.append(10);
      list.append(20);
      list.append(30);

      expect(list.removeAt(1)).toBe(20);
      expect(list.length).toBe(2);

      expect(list.removeAt(1)).toBe(30);
      expect(list.length).toBe(1);

      expect(list.removeAt(0)).toBe(10);
      expect(list.length).toBe(0);
    });
  });
});
