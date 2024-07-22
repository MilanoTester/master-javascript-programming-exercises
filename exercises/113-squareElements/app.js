function squareElements(arr) {
  // your code here
  let myArr=[];
  for (i=0; i < arr.length; i++) {
    myArr.push(arr[i]*arr[i]);
  }
  return myArr;
}
let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
