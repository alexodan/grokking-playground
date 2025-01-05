// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

let nums = [-1, 0, 3, 5, 9, 12]; // target = 9 output 4

function binarySearch(nums: number[], target: number): number {
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    let pivot = Math.floor((lo + hi) / 2); // 2
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[pivot] < target) {
      lo = pivot + 1; // 0
    } else {
      hi = pivot - 1; // hi 3
    }
  }
  return -1;
}

binarySearch(nums, 9);
binarySearch(nums, 2);
