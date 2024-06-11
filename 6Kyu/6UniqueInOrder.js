var uniqueInOrder = function (iterable) {
  let result = [];
  let prevItem = 0;

  for (let item of iterable) {
    if (item !== prevItem) {
      
      result.push(item);
      prevItem = item;
    }
  }

  return result;
};
console.log(uniqueInOrder("ABBCcAD"));
