function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;
  } else {
      let myArray = obj[key].filter((number) => number.length % 2 == 0);
      return myArray;
  }
}
let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
