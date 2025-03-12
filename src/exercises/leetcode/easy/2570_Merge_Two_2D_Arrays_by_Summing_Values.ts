export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  let p1 = 0,
    p2 = 0;
  let result = [];
  // nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1],[5,2]]
  while (p1 < nums1.length && p2 < nums2.length) {
    let id1 = nums1[p1][0];
    let id2 = nums2[p2][0];
    if (id1 === id2) {
      result.push([id1, nums1[p1][1] + nums2[p2][1]]);
      p1++;
      p2++;
    } else if (id1 > id2) {
      result.push([id2, nums2[p2][1]]);
      p2++;
    } else {
      result.push([id1, nums1[p1][1]]);
      p1++;
    }
  }
  while (p1 < nums1.length) {
    let id1 = nums1[p1][0];
    result.push([id1, nums1[p1][1]]);
    p1++;
  }
  while (p2 < nums2.length) {
    let id2 = nums2[p2][0];
    result.push([id2, nums2[p2][1]]);
    p2++;
  }
  return result;
}
