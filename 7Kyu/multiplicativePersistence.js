function per(n) {
  let result = [];
  while (n >= 10) {
    let mynum = n.toString().split("").map(Number);
    n = mynum.reduce((a, b) => a * b);

    result.push(n);
  }
  return result;
}
