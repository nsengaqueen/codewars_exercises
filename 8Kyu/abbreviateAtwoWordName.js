function abbrevName(name) {
  let word = name.split(" ");

  return word[0][0].toUpperCase() + "." + word[1][0].toUpperCase();
}
