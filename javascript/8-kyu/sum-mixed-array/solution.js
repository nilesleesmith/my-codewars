function sumMix(x) {
  let numSum = 0;

  // Add each "number" in x to the previous number. Start at zero.
  for (let i = 0; i < x.length; i++) {
    numSum = numSum + Number(x[i]);
  }

  return numSum;
}