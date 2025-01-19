function lengthOfLongestSubstring(s: string): number {
  let set = new Set();
  let current = 0;
  let max = 0;
  for (let i = 0; i < s.length - max; i++) {
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      }
      set.add(s[j]);
      current++;
    }
    max = Math.max(max, current);
    current = 0;
    set.clear();
  }
  return max;
}

// O(n) time by Claude
function _lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If we find a duplicate character, move the start pointer
    // to the position after the last occurrence of the current character
    if (map.has(char)) {
      start = Math.max(start, map.get(char)! + 1);
    }

    map.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
// abcad
