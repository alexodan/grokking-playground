//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.
function vowelCount(str: string): number {
  let count = 0;
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) { count++; }
  }
  return count;
}
