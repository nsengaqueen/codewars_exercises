function nicknameGenerator(name) {

  let vowels = ["a", "i", "u", "o", "e"];
  if (name.length <= 3) {
    return "Error: Name too short";
  }

  if (!vowels.includes(name[2])) {
    return name.slice(0, 3);
  }
  if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  }
}
