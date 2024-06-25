function firstNonRepeatingLetter(s) {
  const lowerS = s.toLowerCase();

  for (let char of s) {
    if (
      lowerS.indexOf(char.toLowerCase()) ===
      lowerS.lastIndexOf(char.toLowerCase())
    ) {
      return char;
    }
  }

  return "";
}
