import { expect, test, describe } from "bun:test";
import { zeroMatrix } from "./8_zero_matrix";

describe("zeroMatrix", () => {
  test("should handle empty matrix", () => {
    const matrix: number[][] = [];
    expect(zeroMatrix(matrix)).toEqual([]);
  });

  test("should handle 1x1 matrix with zero", () => {
    const matrix = [[0]];
    expect(zeroMatrix(matrix)).toEqual([[0]]);
  });

  test("should handle 1x1 matrix without zero", () => {
    const matrix = [[1]];
    expect(zeroMatrix(matrix)).toEqual([[1]]);
  });

  test("should handle 2x2 matrix with no zeros", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(zeroMatrix(matrix)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test("should handle 2x2 matrix with one zero", () => {
    const matrix = [
      [1, 0],
      [3, 4],
    ];
    expect(zeroMatrix(matrix)).toEqual([
      [0, 0],
      [3, 0],
    ]);
  });

  test("should handle 3x3 matrix with multiple zeros", () => {
    const matrix = [
      [1, 0, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
    expect(zeroMatrix(matrix)).toEqual([
      [0, 0, 0],
      [4, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("should handle 3x4 non-square matrix", () => {
    const matrix = [
      [1, 2, 3, 0],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    expect(zeroMatrix(matrix)).toEqual([
      [0, 0, 0, 0],
      [5, 6, 7, 0],
      [9, 10, 11, 0],
    ]);
  });

  test("should handle matrix with zero in first row and column", () => {
    const matrix = [
      [0, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(zeroMatrix(matrix)).toEqual([
      [0, 0, 0],
      [0, 5, 6],
      [0, 8, 9],
    ]);
  });

  test("should preserve original non-zero elements", () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    const result = zeroMatrix(matrix);
    expect(result[0][0]).toBe(1);
    expect(result[0][2]).toBe(3);
    expect(result[2][2]).toBe(9);
  });
});
