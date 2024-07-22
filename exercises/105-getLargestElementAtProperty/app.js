function getLargestElementAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (obj[key].length == 0) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;    
    } else {
      let largest = 0;
      let myArray = obj[key];
      for (i=1; i < myArray.length; i++) {
        if (myArray[i-1] > myArray[i]) {
          largest = myArray[i-1]
        } else {
          largest = myArray[i];
        }
      }
      return largest;
    }
}
let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
