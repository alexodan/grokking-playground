function convertToBase10(str: string) {
  let output = 0;
  for (let i = 0; i < str.length; i++) {
    let pow = str.length - i - 1;
    output += str[i] == "1" ? Math.pow(2, pow) : 0;
  }
  return output;
}

function reverseBits(n: number) {
  let binary = n.toString(2).padStart(32, "0");
  let bitsReversed = binary.split("").reverse().join("");
  return convertToBase10(bitsReversed);
}
