function firstNonConsecutive (arr) {
  // Check if the following number is an increment of one.
  for (let i = 1; i < arr.length ; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  // Return "null" if all are increments of one.
  return null;
}