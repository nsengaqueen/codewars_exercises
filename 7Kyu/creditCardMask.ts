export function maskify(cc: string): string {
  let sliced1 = cc.slice(-4);
  let sliced2 = cc.slice(0, -4);
  let newCC = sliced2.replace(/./g, "#");

  return newCC + sliced1;
}
console.log(maskify("Skippy"));
