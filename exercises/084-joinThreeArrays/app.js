function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  let myArr1 = arr1.concat(arr2);
  let myArr2 = myArr1.concat(arr3);
  return myArr2;
}
let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]