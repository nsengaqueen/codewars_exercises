function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}

console.log(findShort("am tired of this grandpa"));
