/**
 * This challenge was incremental
 * - First u had to write a pure function
 * - Then introduce the memoization
 * - Then make it async
 * - Maybe it goes on but I got til this point
 */
function cache(callback) {
  const map = new Map(); // keys => input params

  async function call(params) {
    const key = JSON.stringify(params);
    if (!map.get(key)) {
      map.set(key, await callback(params));
    }
    return map.get(key);
  }

  return { call };
}

async function getTotal(nums: number[]) {
  console.log("ejecutando getTotal");
  return new Promise((res) => {
    res(nums.reduce((acc, n) => acc + n, 0));
  });
}

const getTotalCached = cache(getTotal);

(async () => {
  const res = await getTotalCached.call([1, 2, 3]); // me van a cobrar
  console.log("res1:", res);
  const res2 = await getTotalCached.call([1, 2, 3]); // es gratis */
  console.log("res2:", res2);
})();

/* console.log(getTotal([1, 2, 3])); */

/* function toLowerCase(str = "") {
  console.log("toLowerCase");
  return str.toLowerCase();
}

const toLowerCaseCached = cache(toLowerCase);
toLowerCaseCached.call("FIRST CALL");
toLowerCaseCached.call("FIRST CALL");
 */
