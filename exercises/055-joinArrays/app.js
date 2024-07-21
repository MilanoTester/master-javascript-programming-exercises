function joinArrays(arr1, arr2) {
  // your code here
  let myArray = arr1.concat(arr2);
  return myArray;
}
let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
