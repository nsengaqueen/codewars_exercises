function oddOrEven(array) {
  //enter code here
  const total = array.reduce((sum, num) => sum + num, 0);

  return total % 2 === 0 ? "even" : "odd";
}
