function highAndLow(numbers) {
  let numStrings = numbers.split(" ");

  let numArray = numStrings.map((numStr) => Number(numStr));

  let max = Math.max(...numArray);
  let min = Math.min(...numArray);

  return `${max} ${min}`;
}
