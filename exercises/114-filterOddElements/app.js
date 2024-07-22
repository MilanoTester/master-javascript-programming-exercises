function filterOddElements(arr) {
  // your code here
  let newArr = arr.filter(oddNumbers);
  return newArr;
}

function oddNumbers(num) {
  return num % 2 !== 0;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
