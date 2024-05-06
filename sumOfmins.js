function sumOfMinimums(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.min(...arr[i]);
  }
  return result; // your code here
}
let arr = [
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
];
console.log(sumOfMinimums(arr));
