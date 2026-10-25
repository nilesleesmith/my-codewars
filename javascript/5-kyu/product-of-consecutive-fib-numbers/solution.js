function productFib(prod) {
  let first = 0;
  let second = 1;

  // continue until prod is reached.
  while (first * second < prod) {
    [first, second] = [second, first + second];
  }

  return [first, second, first * second === prod];
}
