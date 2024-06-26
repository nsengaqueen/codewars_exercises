function order(words) {
  let array = words.split(" ");
  let digits = "1,2,3,4,5,6,7,8,9";
  let result = [];
  for (let word of array) {
    for (let char of word) {
      if (digits.includes(char)) {
        result[char] = word;
      }
    }
  }

  result.shift();
  return result.join(" ");
}
