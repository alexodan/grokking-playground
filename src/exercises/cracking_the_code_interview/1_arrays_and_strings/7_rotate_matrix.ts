// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to
// rotate the image by 90 degrees. Can you do this in place?

// input = [[1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//         ]
// output =[[7, 4, 1],
//          [8, 5, 2],
//          [9, 6, 3]
//         ]
export function rotateMatrix(arr: number[][]) {
  if (arr.length !== arr[0].length) {
    throw new Error("should be square matrix");
  }
  let rotate = new Array(arr.length).fill([]).map(() => new Array().fill(0));
  // [[0,0,0],[0,0,0],[0,0,0]]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      rotate[j][arr.length - i - 1] = arr[i][j];
    }
  }
  return rotate;
}
