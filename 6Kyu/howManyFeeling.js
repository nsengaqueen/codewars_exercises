function countFeelings(string, array) {
  let counter = 0;
  array.forEach((el) => {
    if (el.split("").every((char) => string.includes(char))) {
      counter++;
    }
  });
  return `${counter} ${counter === 1 ? "feeling." : "feelings."}`;
}
