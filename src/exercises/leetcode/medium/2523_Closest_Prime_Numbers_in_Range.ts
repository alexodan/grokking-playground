// Mine:
// function closestPrimes(left: number, right: number): number[] {
//     let start = left;
//     let all = [];
//     let res = [];
//     while (start <= right) {
//         if (isPrime(start)) {
//             res.push(start);
//             if (res.length === 2) {
//                 if (res[0] == res[1]) break;
//                 all.push(res);
//                 res = [];
//                 continue;
//             }
//         }
//         start++;
//     }
//     if (all.length === 0) return [-1, -1];
//     const sort = all.toSorted((a, b) => a[1] - a[0] > b[1] - b[0] ? 1 : -1);
//     const diff = sort[0][1] - sort[0][0];
//     const sameDiff = sort.filter(pair => (pair[1] - pair[0]) === diff);
//     if (sameDiff.length > 1) return sameDiff.toSorted((a, b) => a[0] - b[0])[0];
//     return sort[0];
// };

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     let x = Math.floor(Math.sqrt(n));
//     for (let i = 2; i <= x; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// Claude one:
function closestPrimes(left: number, right: number): number[] {
  // Find all primes in the range
  const primes: number[] = [];
  for (let num = left; num <= right; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  // If we don't have at least 2 primes, return [-1, -1]
  if (primes.length < 2) {
    return [-1, -1];
  }

  // Find the pair with minimum difference
  let minDiff = Infinity;
  let result: number[] = [-1, -1];

  for (let i = 0; i < primes.length - 1; i++) {
    const diff = primes[i + 1] - primes[i];

    // Update result if:
    // 1. We found a smaller difference, OR
    // 2. We found the same minimum difference but with a smaller first prime
    if (diff < minDiff || (diff === minDiff && primes[i] < result[0])) {
      minDiff = diff;
      result = [primes[i], primes[i + 1]];
    }
  }

  return result;
}

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
