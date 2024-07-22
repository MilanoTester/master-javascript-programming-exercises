function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if ((!obj[key]) || (obj[key].length == 0) || (!Array.isArray(obj[key]))) {
      let arr=[];
      return arr;    
    } else {
      obj[key].pop();
      return obj[key];
    }
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
