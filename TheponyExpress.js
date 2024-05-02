function riders(stations) {
  let totalRiders = 0;
  let distance = 0;

  for (let i = 0; i < stations.length; i++) {
    distance += stations[i];
    if (distance > 100) {
      totalRiders++;
      distance = stations[i];
    }
  }

  return totalRiders + 1;
}
