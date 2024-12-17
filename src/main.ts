import { binarySearch, binarySearchNonRec } from "./dsa/search/binary";
import { bubbleSort } from "./dsa/sort/bubble";

// search
console.log(binarySearch([1, 2, 3, 10, 13], 13));
console.log(binarySearchNonRec([1, 2, 3, 10, 13], 13));

// sort
console.log(bubbleSort([20, 1, 9, 40, 521, -40, 94, 0]));
// console.log(quickSort([20, 1, 9, 40, 521, -40, 94, 0]));
