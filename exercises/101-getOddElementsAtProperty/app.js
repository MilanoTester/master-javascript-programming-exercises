function getOddElementsAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;
  } else {
      let myArray = obj[key].filter((number) => number % 2 !== 0);
      return myArray;
  }
}
let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
