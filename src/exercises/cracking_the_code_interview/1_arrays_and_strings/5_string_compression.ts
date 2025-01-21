// String Compression: Implement a method to perform basic string
// compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the
// original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters
// (a - z).
// abc a1b1c1
export function stringCompression(str: string) {
  if (str.length <= 2) return str;
  let compressed = "";
  let count = 0;
  let last = str[0];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === last) {
      count++;
    } else {
      compressed += `${last}${count}`;
      count = 1;
      last = c;
    }
  }
  compressed += `${last}${count}`;
  return compressed.length < str.length ? compressed : str;
}
