export function minimumRecolors(blocks: string, k: number): number {
  // WBBWWBBWBW
  const substrings = [];
  for (let i = 0; i < blocks.length - k + 1; i++) {
    substrings.push(blocks.substring(i, k + i));
  }
  const mins = substrings.map((sub) => minRecolors(sub));
  return Math.min(...mins);
}

function minRecolors(sub: string) {
  return sub.split("").filter((c) => c === "W").length;
}
