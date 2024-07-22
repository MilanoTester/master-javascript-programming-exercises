function computeSumOfAllElements(arr) {
  // your code here
  sum = 0;
  if (arr.length == 0) {
    return 0;
  } else {
    for (i=0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
