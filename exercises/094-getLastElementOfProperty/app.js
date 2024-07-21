// Write your function here
let obj = {key: [1, 2, 5]};
// Write your function here
function getLastElementOfProperty (obj, key) {
    if (!obj[key]) {
        return undefined;
    } else {
        let myArray = obj[key];
        let num = myArray[myArray.length-1];
        return num;
    }
}
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
