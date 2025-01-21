import { describe, expect, test } from "bun:test";
import { stringRotation } from "./9_string_rotation";

describe("String Rotation", () => {
  test("should return true for rotated strings", () => {
    expect(stringRotation("waterbottle", "erbottlewat")).toBe(true);
    expect(stringRotation("hello", "llohe")).toBe(true);
    expect(stringRotation("javascript", "scriptjava")).toBe(true);
  });

  test("should return false for non-rotated strings", () => {
    expect(stringRotation("hello", "world")).toBe(false);
    expect(stringRotation("rotation", "rotating")).toBe(false);
    expect(stringRotation("test", "tset")).toBe(false);
  });

  test("should handle empty strings", () => {
    expect(stringRotation("", "")).toBe(true);
    expect(stringRotation("", "a")).toBe(false);
    expect(stringRotation("a", "")).toBe(false);
  });

  test("should handle single character strings", () => {
    expect(stringRotation("a", "a")).toBe(true);
    expect(stringRotation("a", "b")).toBe(false);
  });

  test("should be case sensitive", () => {
    expect(stringRotation("Hello", "lloHe")).toBe(true);
    expect(stringRotation("Hello", "hello")).toBe(false);
  });

  test("should handle strings with repeated characters", () => {
    expect(stringRotation("aaaa", "aaaa")).toBe(true);
    expect(stringRotation("aabb", "bbaa")).toBe(true);
    expect(stringRotation("aabb", "abba")).toBe(false);
  });

  test("should handle strings of different lengths", () => {
    expect(stringRotation("hello", "hello!")).toBe(false);
    expect(stringRotation("rotation", "rotate")).toBe(false);
  });

  test("should handle strings with spaces", () => {
    expect(stringRotation("hello world", "worldhello ")).toBe(true);
    expect(stringRotation("hello world", "world hello")).toBe(false);
  });

  test("should handle strings with special characters", () => {
    expect(stringRotation("hello!", "!hello")).toBe(true);
    expect(stringRotation("@#$%", "%@#$")).toBe(true);
  });
});
