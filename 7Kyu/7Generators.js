function* generator(a) {
  let b = 1;

  while (true) {
    let c = a * b;
    yield `${a} x ${b} = ${c}`;
    b++;
  }
}
