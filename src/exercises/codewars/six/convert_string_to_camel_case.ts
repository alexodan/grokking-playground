// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str: string) {
  let res = "";
  let camel = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] == "-") {
      camel = true;
      continue;
    }
    res += camel ? str[i].toUpperCase() : str[i];
    camel = false;
  }
  return res;
}
