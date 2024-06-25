function descendingOrder(n) {
  let sorted = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  let result = Number(sorted);

  return result;
}

//
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}