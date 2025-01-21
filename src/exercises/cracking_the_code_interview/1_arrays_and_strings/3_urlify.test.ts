import { describe, expect, test } from "bun:test";
import { urlify } from "./3_urlify";

describe("urlify", () => {
  test("should replace spaces with %20 in a basic string", () => {
    expect(urlify("Mr John Smith    ", 13)).toBe("Mr%20John%20Smith");
  });

  test("should handle string with leading spaces", () => {
    expect(urlify("   Hello World        ", 11)).toBe("%20%20%20Hello%20World");
  });

  test("should handle string with multiple consecutive spaces", () => {
    expect(urlify("Hello   World     ", 11)).toBe("Hello%20%20%20World");
  });

  test("should handle string with no spaces", () => {
    expect(urlify("HelloWorld   ", 10)).toBe("HelloWorld");
  });

  test("should handle single character with spaces", () => {
    expect(urlify("a   ", 1)).toBe("a");
  });

  test("should handle empty string", () => {
    expect(urlify("    ", 0)).toBe("");
  });

  test("should handle string with special characters", () => {
    expect(urlify("Hello! World?   ", 12)).toBe("Hello!%20World?");
  });

  test("should handle string with numbers", () => {
    expect(urlify("Page 404 Error    ", 13)).toBe("Page%20404%20Error");
  });

  test("should handle string with only spaces", () => {
    expect(urlify("      ", 2)).toBe("%20%20");
  });
});
