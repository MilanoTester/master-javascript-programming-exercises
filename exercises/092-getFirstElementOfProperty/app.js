let obj = {key: [1, 2, 4]};
// Write your function here
function getFirstElementOfProperty(obj, key) {
    if (!obj[key]) {
        return undefined;
    } else {
        let myArray = obj[key];
        let num = myArray[0];
        return num;
    }
}
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1