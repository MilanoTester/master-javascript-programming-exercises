function joinArrayOfArrays(arr) {
  // your code here
  let newArr = [];
  for (i=0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
}

let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y'],]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
