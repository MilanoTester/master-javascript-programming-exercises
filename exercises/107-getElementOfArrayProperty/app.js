function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if ((!obj[key]) || (obj[key].length == 0) || (!Array.isArray(obj[key]))) {
        return undefined;    
      } else {
        let element = obj[key][index];
        return element;
      }
}
let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
