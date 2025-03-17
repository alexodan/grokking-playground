export function coloredCells(n: number): number {
  // 1, 5, 13, 25
  //  ,+4, +8,+12
  let edges = 4;
  let blueCells = 1;
  for (let i = 0; i < n; i++) {
    blueCells += i * 4;
  }
  return blueCells;
}
