import { describe, expect, test } from "bun:test";
import { stringCompression } from "./5_string_compression";

describe("String Compression", () => {
  test("should compress a string with repeated characters", () => {
    expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
  });

  test("should return original string when compressed version is not smaller", () => {
    expect(stringCompression("abcd")).toBe("abcd");
  });

  test("should handle empty string", () => {
    expect(stringCompression("")).toBe("");
  });

  test("should handle single character", () => {
    expect(stringCompression("a")).toBe("a");
  });

  test("should handle string with all repeated characters", () => {
    expect(stringCompression("aaaaaa")).toBe("a6");
  });

  test("should handle alternating characters", () => {
    expect(stringCompression("ababab")).toBe("ababab");
  });

  test("should handle case sensitivity", () => {
    expect(stringCompression("aAaAaA")).toBe("aAaAaA");
  });

  test("should compress long repeated sequences", () => {
    expect(stringCompression("aaaaaaaaaaaaa")).toBe("a13");
  });

  test("should handle two character groups", () => {
    expect(stringCompression("aabbcc")).toBe("aabbcc");
  });

  test("should compress mixed length groups", () => {
    expect(stringCompression("aaabbbccccdd")).toBe("a3b3c4d2");
  });
});
