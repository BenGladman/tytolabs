// https://en.wikipedia.org/wiki/Marsaglia_polar_method

export function normalRandom({
  mean = 0,
  stdDev = 1,
  min = mean - 3 * stdDev,
  max = mean + 3 * stdDev,
} = {}) {
  const u = Math.random() * 2 - 1;
  const v = Math.random() * 2 - 1;
  const s = u ** 2 + v ** 2;

  if (s < 1 && s !== 0) {
    const norm = u * Math.sqrt((-2 * Math.log(s)) / s);
    const rnd = mean + stdDev * norm;
    if (rnd >= min && rnd <= max) {
      return rnd;
    }
  }

  return normalRandom({ mean, stdDev, min, max });
}
