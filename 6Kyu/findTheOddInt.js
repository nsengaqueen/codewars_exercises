function digitalRoot(num) {
  let sumOfNum;

  if (num.toString().length > 1) {
    sumOfNum = num
      .toString()
      .split("")
      .reduce((sum, number) => sum + Number(number), 0);
  } else {
    return num;
  }

  return digitalRoot(sumOfNum);
}


function digital_root(n) {
  return ((n - 1) % 9) + 1;
}