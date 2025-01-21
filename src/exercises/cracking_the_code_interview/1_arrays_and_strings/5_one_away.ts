// There are three types of edits that can be performed on string:
// Insert a character, remove, or replace. Given two strings, write a function
// to check if they are one edit (or zero edits) away.

export function isOneAway(str1: string, str2: string): boolean {
  let hasEdit = false;
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++;
      p2++;
      continue;
    } else {
      if (hasEdit) {
        return false;
      }
      hasEdit = true;
      if (str1.length > str2.length) {
        p1++;
      } else if (str1.length < str2.length) {
        p2++;
      } else {
        p1++;
        p2++;
      }
    }
  }
  return true;
}
