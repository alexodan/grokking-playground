function convertToBinary(n: number): number[] {
  let max = 31;
  let base = 2;
  let bits = new Array(31).fill(0);
  let rest = n;
  while (rest > 0) {
    let pow = Math.pow(base, max);
    if (rest - pow == 0) {
      bits[max] = 1;
      return bits;
    } else if (rest > pow) {
      rest = rest - pow;
      bits[max] = 1;
    }
    max--;
  }
  return bits;
}

function hammingWeight(n: number): number {
  let binary = convertToBinary(n);
  return String(binary)
    .split("")
    .filter((n) => n === "1").length;
}
