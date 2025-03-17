export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let arr = new Array(grid.length * grid.length).fill(0).map((_, i) => i + 1);
  // [1,2,3,4] when grid 2x2
  // [1,3,2,2] => [0,-2,0,4]
  let dup = -1;
  grid
    .flatMap((arr) => arr)
    .forEach((n) => {
      arr[n - 1] -= n;
      if (arr[n - 1] < 0) {
        dup = n;
      }
    });
  let miss = arr.find((x) => x > 0)!;
  return [dup, miss];
}
