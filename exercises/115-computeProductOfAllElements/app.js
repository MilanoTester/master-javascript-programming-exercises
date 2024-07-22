function computeProductOfAllElements(arr) {
  // your code here
  product = 1;
  if (arr.length == 0) {
    return 0;
  } else {
    for (i=0; i < arr.length; i++) {
      product = product * arr[i];
    }
  }
  return product;
}
let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
