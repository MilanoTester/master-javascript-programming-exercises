let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    let x = 0; // obj2 index
    let y = 0; // obj1 index
    let w = 0; // auxiliar indicator
    let z = 0; // property to copy
    for (x in obj2) {
        for (y in obj1) {
            if (x == y) {
                w = 0;
            } else {
                w++;
                z = x;
            }
            if (w > 1) {
                obj1[z] = obj2[x];
            }
        }
    }
}
extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}