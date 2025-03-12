export function applyOperations(nums: number[]): number[] {
  let len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  const result = nums.filter((x) => x > 0);
  return result.concat(new Array(nums.length - result.length).fill(0));
}
