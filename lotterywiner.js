function lottery(input) {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (!isNaN(parseInt(input[i]))) {
      if (result.indexOf(input[i]) === -1) {
        result += input[i];
      }
    }
  }

  if (result === "") {
    return "One more run!";
  } else {
    return result;
  }
}

function lottery(str) {
  const matchedDigits = str.match(/\d/g);

  const uniqueDigits = new Set(matchedDigits);

  const result = [...uniqueDigits.values()].join("");

  return result || "One more run!";
}

console.log(lottery("hPrBKWDH8yc6Lt5NQZWQ"));
console.log(lottery("ynMAisVpHEqpqHBqTrwH"));
console.log(lottery("555"));
