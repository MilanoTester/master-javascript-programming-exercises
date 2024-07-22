function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0) {
    return 0;
  } else {
      var smallest = 500;
      var noNumbers = 0;
      for (i=0; i < arr.length; i++) {
          if ((typeof arr[i] === "number" ) && (arr[i] < smallest)) {
              smallest = arr[i];
              noNumbers = 1;
          }
      }
  }
  if (noNumbers == 0) {
      return 0;
  } else {
      return smallest;
  }
}
let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
