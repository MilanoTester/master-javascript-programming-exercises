function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (obj[key].length == 0) || (!Array.isArray(obj[key]))) {
        return 0;    
      } else {
        let sum = 0;
        let arr = obj[key];
        for (i=0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
      }
}
let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
