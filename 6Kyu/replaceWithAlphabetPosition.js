function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(function (char) {
      return alphabet.indexOf(char) + 1;
    })
    .join(" ");
}
