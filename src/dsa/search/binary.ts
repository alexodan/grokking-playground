export function binarySearch<T>(arr: T[], val: T) {
  if (!arr || arr.length === 0) {
    return false;
  }
  let mid = Math.floor(arr.length / 2);
  if (val > arr[mid]) {
    return binarySearch(arr.slice(mid + 1), val);
  } else if (val < arr[mid]) {
    return binarySearch(arr.slice(0, mid), val);
  }
  return true;
}

//  s              e
// [1, 2, 3, 4, 5, 6]
export function binarySearchNonRec<T>(arr: T[], val: T) {
  if (!arr || arr.length === 0) {
    return false;
  }
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === val) {
      return true;
    } else if (arr[mid] > val) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
