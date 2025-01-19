// Determine if a string has all unique characters
// What if you cannot use additional data structures?
export function isUnique(s: string) {
  let set = new Set();
  for (let c of s) {
    if (set.has(c)) {
      return false;
    }
    set.add(c);
  }
  return true;
}
// O(n^2)
