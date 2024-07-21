let obj = {key: [1, 20, 30]};
// Write your function here
function getElementsGreaterThan10AtProperty (obj, key) {
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
        let arr=[];
        return arr;
    } else {
        let myArray = obj[key].filter((number) => number > 10);
        return myArray;
    }
}
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
