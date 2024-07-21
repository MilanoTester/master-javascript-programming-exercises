let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let x in obj) {
        if (obj[x] < num) {
            delete obj[x]
        }
    }    
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }