function squareDigits(num) {
  let newNum = String(num)
    .split("")
    .map((s) => Number(s) ** 2)
    .join("");

  return Number(newNum);
}

console.log(squareDigits(765));
