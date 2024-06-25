function onlyDuplicates(str) {
  // your code here
  let repeat = [];
  let string = str.split("");
  for (let char of string) {
    if (string.indexOf(char) !== string.lastIndexOf(char)) {
      repeat.push(char);
    }
  }

  return repeat.join("");
}
console.log(onlyDuplicates("strr"));
