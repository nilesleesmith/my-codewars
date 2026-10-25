function descendingOrder(n) {
  const digits = n.toString().split("");
  // convert number to digits then sort
  digits.sort((a, b) => b - a);
  return Number(digits.join(""));
}
