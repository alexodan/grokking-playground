function countArara(n: number) {
  let output = "adak ".repeat(Math.floor(n / 2)) + (n % 2 !== 0 ? "anane" : "");
  return output.trim();
}
