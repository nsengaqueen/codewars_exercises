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

//another way
function pigIt(str) {
  // Split the input string into an array of words
  var arrayWord = str.split(" ");

  // Use map() to transform each word
  return arrayWord
    .map(function (word) {
      // Extract the first letter of the word
      var firstLetter = word.charAt(0);

      // Form the Pig Latin transformation
      return word.slice(1) + firstLetter + "ay";
    })
    .join(" ");
}
