function average(arr) {
  // your code here
  let average = sum(arr) /  arr.length;
  return average;
}

function sum(arr) {
  // your code here
  let sum = 0;
  for (i=0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(average([1, 2])); // --> 1.5
