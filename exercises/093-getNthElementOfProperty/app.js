let obj = {key: [1, 2, 6]};
// Write your function here
function getNthElementOfProperty (obj, key, n) {
    if (!obj[key]) {
        return undefined;
    } else {
        let myArray = obj[key];
        let num = myArray[n];
        return num;
    }
}
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
