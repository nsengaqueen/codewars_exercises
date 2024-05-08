function fraction(a, b) {
  let smallest = Math.min(a, b);
  let hcd = 1;
  for (let i = 1; i <= smallest; i++) {
    if (a % i === 0 && b % i === 0) {
      hcd = i;
    }
  }
  if (1 <= a <= 2000 && 1 <= b <= 2000) {
    let newA = a / hcd;
    let newB = b / hcd;
    return newA + newB;
  }
}
