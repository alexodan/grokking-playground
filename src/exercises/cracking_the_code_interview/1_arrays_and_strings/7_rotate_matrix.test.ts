import { expect, test, describe } from "bun:test";
import { rotateMatrix } from "./7_rotate_matrix";

describe("rotateMatrix", () => {
  test("should rotate a 3x3 matrix", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    expect(rotateMatrix(input)).toEqual(expected);
  });

  test("should rotate a 2x2 matrix", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [3, 1],
      [4, 2],
    ];
    expect(rotateMatrix(input)).toEqual(expected);
  });

  test("should handle 1x1 matrix", () => {
    const input = [[1]];
    const expected = [[1]];
    expect(rotateMatrix(input)).toEqual(expected);
  });

  test("should not modify the original matrix", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const originalInput = [
      [1, 2],
      [3, 4],
    ];
    rotateMatrix(input);
    expect(input).toEqual(originalInput);
  });

  test("should rotate a 4x4 matrix", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];
    expect(rotateMatrix(input)).toEqual(expected);
  });

  test("should throw error for non-square matrix", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(() => rotateMatrix(input)).toThrow();
  });

  test("should throw error for empty matrix", () => {
    const input: number[][] = [];
    expect(() => rotateMatrix(input)).toThrow();
  });

  test("should throw error for matrix with empty rows", () => {
    const input = [[], []];
    expect(() => rotateMatrix(input)).toThrow();
  });
});
