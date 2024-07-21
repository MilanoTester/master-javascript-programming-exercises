
let obj = {key: [1, 2, 3]};

function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if ((obj[key].length == 0) || (!Array.isArray(obj[key]))) {
    return 0;
  } else if (!obj[key]) {
    return 0;
  } else {
    let sum = 0;
    let average = 0;
    let arr = obj[key];
    for (i=0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    average = sum / arr.length;
    return average;
  }
}
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  

