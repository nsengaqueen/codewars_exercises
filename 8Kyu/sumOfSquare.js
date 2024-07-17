function squareSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num ** 2;
  }
  return sum;
}
