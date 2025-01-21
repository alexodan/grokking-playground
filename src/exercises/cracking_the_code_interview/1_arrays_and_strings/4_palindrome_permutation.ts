// Given a string, write a function to check if it is a permutation of a palindrome
export function isPalindromePermutation(str: string) {
  let map = new Map();
  let repl = str.replaceAll(" ", "").toLowerCase();
  for (let i = 0; i < repl.length; i++) {
    if (!map.get(repl[i])) {
      map.set(repl[i], 0);
    }
    map.set(repl[i], map.get(repl[i]) + 1);
  }
  let values = Array.from(map.values());
  let odds = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      odds++;
    }
  }
  return odds === 0 || odds === 1;
}
