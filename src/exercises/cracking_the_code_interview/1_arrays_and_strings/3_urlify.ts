// Replace all spaces in a string with %20. You are given the "true"
// length of the string, you may assume the string has sufficient space
// at the end to hold the additional characters

export function urlify(str: string, len: number) {
  let out = "";
  let repl = str.trimEnd();
  let repl2 = repl.length < len ? " ".repeat(len) : repl;
  for (let i = 0; i < repl2.length; i++) {
    if (repl2[i] === " ") {
      out += "%20";
    } else {
      out += repl2[i];
    }
  }
  return out;
}
