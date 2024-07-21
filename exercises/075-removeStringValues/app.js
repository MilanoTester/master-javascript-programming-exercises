function removeStringValues(obj) {
    // your code here
    for (let x in obj) {
        let type = typeof obj[x];
        if (type == "string") {
            delete obj[x];
        }
    }
}
let obj = {
    name: 'Sam',
    age: 20
}
removeStringValues(obj);
console.log(obj); // --> { age: 20 }
