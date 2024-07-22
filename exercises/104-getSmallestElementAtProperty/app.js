function getSmallestElementAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (obj[key].length == 0) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;    
    } else {
      let smallest = 0;
      let myArray = obj[key];
      for (i=1; i < myArray.length; i++) {
        if (myArray[i-1] < myArray[i]) {
          smallest = myArray[i-1]
        } else {
          smallest = myArray[i];
        }
      }
      return smallest;
    }
}
let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
