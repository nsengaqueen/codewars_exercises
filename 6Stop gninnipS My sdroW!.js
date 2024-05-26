function spinWords(string) {
  return string
    .split(" ")
    .map(function (word) {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
