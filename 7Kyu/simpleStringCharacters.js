function solve(s) {
  let myArray = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;

  for (let char of s) {
    if (char === char.toUpperCase() && /[A-Z]/.test(char)) {
      count1++;
    }
    if (char === char.toLowerCase() && /[a-z]/.test(char)) {
      count2++;
    }
     if (char >= "0" && char <= "9") {
       count3++;
     }
    if (/[^a-zA-Z0-9]/.test(char)) {
      count4++;
    }
  }

  myArray.push(count1, count2, count3, count4);
  return myArray;
}
