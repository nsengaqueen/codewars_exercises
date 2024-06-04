
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }





function sortArray(array) {
  const sortedOdds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  let oddIndex = 0;
  return array.map((num) => {
    if (num % 2 !== 0) {
      return sortedOdds[oddIndex++];
    } else {
      return num;
    }
  });
}

console.log(sortArray([5, 8, 6, 3, 4]));
