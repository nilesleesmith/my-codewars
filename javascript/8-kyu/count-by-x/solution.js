function countBy(x, n) {
  let z = [];
  // For n times multiply i by x.
  for (let i = 1; i <=n; i++) {
    z.push(i * x);
  }
  return z;
}
