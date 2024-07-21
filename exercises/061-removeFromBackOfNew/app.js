function removeFromBackOfNew(arr) {
  // your code here
  let firstElement = 0;
  let lastElement = (arr.length - 1);
  let newArray = arr.slice(firstElement, lastElement);
  return newArray;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
