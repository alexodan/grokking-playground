// String Rotation: Assume you have a method isSubstring
// which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if
// s2 is a rotation of s1 using only one call to isSubstring.
// (e.g.,"waterbottle" is a rotation of "erbottlewat").
function isSubstring(s1: string, s2: string) {
  return s2.toLowerCase().includes(s1.toLowerCase());
}

// waterbottle => erbottlewat
// find w in s2, check if same till last
// then do isSubstring(s1, s2.substring(0, index of the "w"))
export function stringRotation(s1: string, s2: string): boolean {
  if (s1.length === 0 && s2.length === 0) return true;
  for (let i = 0; i < s1.length; i++) {
    let index = s2.indexOf(s1[i]);
    if (index === -1) {
      return false;
    }
    let substr2 = s2.substring(index);
    let substr1 = s1.substring(i, substr2.length);
    if (substr1 === substr2) {
      return isSubstring(s1.substring(substr2.length), s2.substring(0, index));
    }
  }
  return false;
}
