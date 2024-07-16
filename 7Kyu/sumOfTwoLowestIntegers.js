function sumTwoSmallestNumbers(numbers) {
  let newArr = numbers.sort((a, b) => a - b).slice(0, 2);
  return newArr[0] + newArr[1];
}
