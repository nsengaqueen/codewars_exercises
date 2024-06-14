function duplicateCount(text) {
  //...
  let array = text.split("");
  const counts = {};
  array.forEach((value) => {
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      counts[value]++;
    }
  });

  return counts;
}
