export function pivotArray(nums: number[], pivot: number): number[] {
  let left = [];
  let right = [];
  let mid = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else if (nums[i] > pivot) {
      right.push(nums[i]);
    } else {
      mid.push(nums[i]);
    }
  }
  return [...left, ...mid, ...right];
}
