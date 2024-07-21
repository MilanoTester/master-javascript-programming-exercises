function getElementsAfter(array, n) {
  // your code here
  let firstElement = n + 1;
  let lastElement = array.length;
  let myArray = array.slice(firstElement,lastElement);
  return myArray;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
