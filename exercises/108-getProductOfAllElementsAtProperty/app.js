function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (obj[key].length == 0) || (!Array.isArray(obj[key]))) {
      return 0;    
    } else {
      let product = 1;
      for (i = 0; i < obj[key].length; i++) {
        product = product * obj[key][i];
      } 
      return product;
    }    
}
let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
