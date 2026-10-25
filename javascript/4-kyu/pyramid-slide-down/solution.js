function longestSlideDown(pyramid) {
  if (pyramid.length === 0) return 0;

  // Start at the bottom.
  const bestSums = [...pyramid[pyramid.length - 1]];

  // Sum up to the top.
  for (let row = pyramid.length - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      bestSums[col] =
        pyramid[row][col] + Math.max(bestSums[col], bestSums[col + 1]);
    }
  }

  return bestSums[0];
}
