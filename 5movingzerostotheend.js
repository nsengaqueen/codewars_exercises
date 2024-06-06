const moveZeros = (arr) => {
  let result = [];
  let zeros = [];
  for (let element of arr) {
    element !== 0 ? result.push(element) : zeros.push(element);
  }
  let final = result.concat(zeros);
  return final;
};
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));


// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };
