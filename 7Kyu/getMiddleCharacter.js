function getMiddle(s) {
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 !== 0) {
    return s[mid];
  } else {
    return s[mid - 1] + s[mid];
  }
}
