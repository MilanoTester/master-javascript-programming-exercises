function removeOddValues(obj) {
    // your code here
    for (let x in obj) {
      if (obj[x] % 2 !== 0) {
        delete obj[x];
      }
    }
}
let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
