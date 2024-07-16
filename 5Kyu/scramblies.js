function scramble(str1, str2) {
  const charCountStr1 = {};
  for (let char of str1) {
    charCountStr1[char] = (charCountStr1[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!charCountStr1[char] || charCountStr1[char] <= 0) {
      return false;
    }
    charCountStr1[char]--;
  }

  return true;
}
