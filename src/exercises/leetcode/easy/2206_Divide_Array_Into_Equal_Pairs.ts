// [1,2,1,2] => [[1,1],[2,2]]
export function divideArray(nums: number[]): boolean {
  // 1st approach - sort the array, make tuples, check them
  // if (nums.length % 2 !== 0) return false;
  // let sorted = nums.toSorted((a, b) => a - b);
  // for (let i = 0; i < sorted.length; i += 2) {
  //     const [a, b] = [sorted[i], sorted[i+1]];
  //     if (a !== b) {
  //         return false;
  //     }
  // }
  // return true;

  // 2nd - make a map, if any given key has an odd value, then false
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 0);
    }
    map.set(nums[i], map.get(nums[i]) + 1);
  }
  for (let val of map.values()) {
    if (val % 2 !== 0) {
      return false;
    }
  }
  return true;
}
