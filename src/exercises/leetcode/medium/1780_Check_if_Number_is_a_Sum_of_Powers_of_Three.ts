export function checkPowersOfThree(n: number): boolean {
  let pow = 0;
  // grab max pow that is closest (from below) to n
  // e.g. n = 38, 3^n closest is n = 3 -> 3^3 = 27
  // so I can store all powers of 3^n from 0 to 3
  let pows = [];
  let total = 0;
  while (Math.pow(3, pow) <= n) {
    pows.push(Math.pow(3, pow));
    total += Math.pow(3, pow);
    pow++;
  }
  if (total < n) return false;
  let diff = total - n;
  for (let i = pows.length - 1; i >= 0; i--) {
    if (pows[i] <= diff) {
      diff -= pows[i];
    }
  }
  return diff === 0;
}
