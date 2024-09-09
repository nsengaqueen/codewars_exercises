function distinct(a) {
  let result = [];

  for (let num of a) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}
