function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
      } else {
          var largest = 0;
          var noNumbers = 0;
          for (i=0; i < arr.length; i++) {
              if ((typeof arr[i] === "number" ) && (arr[i] > largest)) {
                largest = arr[i];
                  noNumbers = 1;
              }
          }
      }
      if (noNumbers == 0) {
          return 0;
      } else {
          return largest;
      }
}
let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
