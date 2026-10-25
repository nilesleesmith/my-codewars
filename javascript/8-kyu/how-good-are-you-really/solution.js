function betterThanAverage(classPoints, yourPoints) {
  // sum classPoints then calculate yourPoints
  const totalPoints = classPoints.reduce((sum, point) => sum + point, 0) + yourPoints;
  const average = totalPoints / (classPoints.length + 1);
  return yourPoints > average;
  };
