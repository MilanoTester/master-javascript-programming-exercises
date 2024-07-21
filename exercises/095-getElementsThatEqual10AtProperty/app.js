// Write your function here
let obj = {key: [1000, 10, 50, 10]};
// Write your function here
function getElementsThatEqual10AtProperty (obj, key) {
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
        let arr=[];
        return arr;
    } else {
        let myArray = obj[key].filter((number) => number == 10);
        return myArray;
    }
}
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]