/**
 * You are in a building with N floors and have a crystal ball.
 * You need to find the exact floor F where the crystal ball begin to break
 * when dropped.
 * - If a ball is dropped from floor F or above, it will break
 * - If a ball is dropped from floor F-1 or below, it will not break
 *
 * @param breaks: boolean[] - Array representing each floor, where true means
 *               a ball will break if dropped from that floor
 * @returns number - The index of the first true value (first breaking floor)
 */
function floorBreakingCrystalBall(breaks: boolean[]): number {
  let pivot = Math.floor(Math.sqrt(breaks.length));
  if (breaks[0]) {
    return 0;
  }
  for (let i = 0; i < breaks.length; i += pivot) {
    if (breaks[i] && i > 0) {
      let start = i - pivot;
      for (let j = start; j <= start + pivot; j++) {
        if (breaks[j]) {
          return j;
        }
      }
    }
  }
  return -1;
}

console.log(
  floorBreakingCrystalBall([
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
  ])
);
console.log(floorBreakingCrystalBall([true, true]));
console.log(floorBreakingCrystalBall([false, false, true, true]));
