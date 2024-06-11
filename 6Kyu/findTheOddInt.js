function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
