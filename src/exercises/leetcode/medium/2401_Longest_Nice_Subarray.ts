export function longestNiceSubarray(nums: number[]): number {
  let left = 0;
  let max = 1;
  let bitmask = 0;
  // [3,1,5,11,13]
  for (let right = 0; right < nums.length; right++) {
    while ((bitmask & nums[right]) !== 0) {
      // ^= is XOR (i.e. we remove left num bits)
      bitmask ^= nums[left];
      left++;
    }
    // |= is OR (i.e. we add right num bits)
    bitmask |= nums[right];
    max = Math.max(right - left + 1, max);
  }
  return max;
}
