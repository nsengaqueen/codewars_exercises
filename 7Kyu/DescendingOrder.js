function descendingOrder(n) {
  let sorted = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  let result = Number(sorted);

  return result;
}
