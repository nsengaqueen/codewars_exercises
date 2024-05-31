function twosDifference(input) {
  return input.filter((num) => input.indexOf(num + 2) != -1).sort((a, b) => a - b).map((num) => [num, num + 2]);
}


// function twosDifference(input) {
//   let result = [];
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (Math.abs(input[j] - input[i]) === 2) {
//         let pair = [input[i], input[j]].sort((a, b) => a - b);
//         result.push(pair);
//       }
//     }
//   }

//   result.sort((a, b) => a[0] - b[0]);

//   return result;
// }