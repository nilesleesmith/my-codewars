var summation = function (num) {
  // Start at one and add i to sum for num number of times.
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
