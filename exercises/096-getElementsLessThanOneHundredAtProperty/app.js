// Write your function here
let obj = {key: [1000, 20, 50, 500]};
// Write your function here
function getElementsLessThan100AtProperty (obj, key) {
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
        let arr=[];
        return arr;
    } else {
        let myArray = obj[key].filter((number) => number < 100);
        return myArray;
    }
}
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
