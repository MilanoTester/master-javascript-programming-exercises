
let obj = {name: 'Sam', age: 20,}

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj[key];
}
console.log(removeProperty(obj, 'name'));
console.log(obj);
