// Zero Matrix: Write an algorithm such that if an element in an MxN
// matrix is 0, its entire row and column are set to O.
export function zeroMatrix(matrix: number[][]) {
  let zeros = []; // i j
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }
  for (let i = 0; i < zeros.length; i++) {
    const [row, col] = zeros[i];
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
  return matrix;
}
