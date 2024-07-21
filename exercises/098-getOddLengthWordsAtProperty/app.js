let obj = {key: ['It', 'has', 'some', 'words']};
// Write your function here
function getOddLengthWordsAtProperty (obj, key) {
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
        let arr=[];
        return arr;
    } else {
        let myArray = obj[key].filter((number) => number.length % 2 !== 0);
        return myArray;
    }
}
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

