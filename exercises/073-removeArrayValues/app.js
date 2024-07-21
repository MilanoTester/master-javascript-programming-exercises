function removeArrayValues(obj) {
    // your code here
    for (let x in obj) {
        if (obj[x].length > 1 ) {
            delete obj[x];
        }
    }
}
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }