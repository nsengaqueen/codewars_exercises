function XO(str) {
  //code here
  let count1 = 0;
  let count2 = 0;
  for (let char of str.toLowerCase()) {
    if (char === "x") {
      count1++;
    }
    if (char === "o") {
      count2++;
    }
  }
  return count1 === count2;
}
