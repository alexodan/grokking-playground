// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
export function dnaStrand(dna: string) {
  const map = { A: "T", T: "A", C: "G", G: "C" } as const;
  return dna
    .split("")
    .map((c) => map[c as keyof typeof map])
    .join("");
}
