function pigIt(str) {
  let words = str.split(" ");
  let transformedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (/^[^a-zA-Z]*$/.test(word)) {
      transformedWords.push(word);
    } else {
      let firstChar = word[0];
      let restOfWord = word.slice(1);
      let pigLatinWord = restOfWord + firstChar + "ay";
      transformedWords.push(pigLatinWord);
    }
  }

  let result = transformedWords.join(" ");

  return result;
}
