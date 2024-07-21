function getEvenElementsAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;
  } else {
      let myArray = obj[key].filter((number) => number % 2 == 0);
      return myArray;
  }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
