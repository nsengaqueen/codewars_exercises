export function persistence(num: number): number {
  let count = 0;
  while (num >= 10) {
    let mynum = num.toString().split("").map(Number);

    num = mynum.reduce((a, b) => a * b);

    count++;
  }
  return count;
}
