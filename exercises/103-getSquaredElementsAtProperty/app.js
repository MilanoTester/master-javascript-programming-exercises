function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;
    } else {
      let myArray = obj[key].map(square);
      return myArray;
    }
}
function square (num) {
  return num * num;
}
let obj = {
  key: [2, 1, 5]
}
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
