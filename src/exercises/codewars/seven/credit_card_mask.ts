function maskify(cc: string) {
  if (cc.length <= 4) return cc;
  return "#".repeat(cc.length - 4) + cc.substring(cc.length - 4);
}
