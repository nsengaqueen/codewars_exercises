function leastLarger(a, i) {
  let targetNumber = a[i];
  let smallestLargerValue = Infinity;
  let smallestLargerIndex = -1;

  for (let j = 0; j < a.length; j++) {
    if (a[j] > targetNumber && a[j] < smallestLargerValue) {
      smallestLargerValue = a[j];
      smallestLargerIndex = j;
    }
  }

  return smallestLargerIndex;
}

console.log(leastLarger([1, 2, 3, 4], 1));
