function getLastElement(array) {
  // Add your code after this line
  let length = array.length;
  let lastElement = array[length-1];
  return lastElement;
}
let output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4