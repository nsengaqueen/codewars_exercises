function isPangram(str) {
  const alphabetSet = new Set();
  

  for (let char of str) {
    if (char >= "a" && char <= "z") {
      alphabetSet.add(char);
    }
  }

  return alphabetSet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); 


function isPangram(string) {
  const letters = string.toLowerCase().match(/[a-z]/g);
  const alphabet = [...new Set(letters)];
  return alphabet.length === 26;
}
