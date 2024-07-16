function narcissistic(value) {
  let newVal = String(value);
  let power = String(value).length;
  let sum = 0;
  for (char of newVal) {
    powered = Number(char) ** power;
    sum += powered;
  }
  return sum == value;
}
