function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
      a = a.filter(function (element) {
        return element !== b[i];
      });
    }
  }
  return a;
}
