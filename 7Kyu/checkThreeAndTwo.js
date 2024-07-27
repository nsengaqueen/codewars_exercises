function checkThreeAndTwo(arr) {
  let countA = 0;
  let countB = 0;
  let countC = 0;
  arr.forEach((letter) => {
    if (letter === "a") {
      countA++;
    } else if (letter === "b") {
      countB++;
    } else if (letter === "c") {
      countC++;
    }
  });
  return (
    (countA === 2 || countB === 2 || countC === 2) &&
    (countA === 3 || countB === 3 || countC === 3)
  );
}
