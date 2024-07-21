function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let x in obj) {
    if (obj[x].length > num) {
        delete obj[x]
    }
  }     
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
