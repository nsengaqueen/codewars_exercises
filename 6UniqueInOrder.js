var uniqueInOrder = function (iterable) {
  let mySet = new Set();
  let result = [];
  let prevItem = 0;

  for (let item of iterable) {
    if (item !== prevItem) {
      mySet.add(item);
      result.push(item);
      prevItem = item;
    }
  }

  return result;
};
console.log(uniqueInOrder("ABBCcAD"));
