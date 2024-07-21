function getElementsUpTo(array, n) {
  // your code here
  let firstElement = 0;
  let lastElement = n;
  let myArray = array.slice(firstElement,lastElement);
  return myArray;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
