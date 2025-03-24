export function addSpaces(s: string, spaces: number[]): string {
  let res = [];
  let i = 0,
    j = 0;
  while (i < s.length && j < spaces.length) {
    if (i === spaces[j]) {
      res.push(" ");
      j++;
    }
    res.push(s[i]);
    i++;
  }
  while (i < s.length) {
    res.push(s[i]);
    i++;
  }
  return res.join("");
}
