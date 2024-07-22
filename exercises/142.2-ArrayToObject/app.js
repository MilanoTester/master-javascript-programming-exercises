function fromListToObject(array) {
  // your code here
  let obj = new Object;  
  for (i=0; i < array.length; i++) {
    for (j=0; j < array[i].length-1; j++) {
        obj[array[i][j]] = array[i][j+1];
      }
    }
  
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
