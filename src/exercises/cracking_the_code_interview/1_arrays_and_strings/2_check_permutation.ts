// Given two strings, wrtite a method to decide if one is a permutation of the other
export function isPermutation(str1: string, str2: string) {
  //   return (
  //     str1.split("").toSorted().join("") === str2.split("").toSorted().join("")
  //   );
  if (str1.length !== str2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < str1.length; i++) {
    map1.set(str1[i], map1.get(str1[i]) ? map1.get(str1[i]) + 1 : 1);
    map2.set(str2[i], map2.get(str2[i]) ? map2.get(str2[i]) + 1 : 1);
  }
  for (let key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
