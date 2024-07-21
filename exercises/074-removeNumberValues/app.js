function removeNumberValues(obj) {
    // your code here
    for (let x in obj) {
        let type = typeof obj[x];
        if (type == "number") {
            delete obj[x];
        }
    }
}
let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
