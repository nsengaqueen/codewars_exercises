function toCamelCase(str) {
  let newString = str.replace(/[-_]/g, " ");
  let words = newString.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  return result;
}
