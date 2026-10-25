function score(dice) {
  const counts = Array(7).fill(0);

  // count each die face.
  for (const die of dice) {
    counts[die]++;
  }

  let total = 0;

  // score triples.
  for (let face = 1; face <= 6; face++) {
    const triples = Math.floor(counts[face] / 3);
    total += triples * (face === 1 ? 1000 : face * 100);
    counts[face] %= 3;
  }

  // score the 1s and 5s.
  return total + counts[1] * 100 + counts[5] * 50;
}
