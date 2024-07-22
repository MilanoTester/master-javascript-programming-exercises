function getLargestElement(arr) {
  // your code here
    if (arr.length == 0) {
        return 0;
    } else {
        let largest = 0;
        for (i=0; i < arr.length; i++) {
            if (arr[i] > largest) {
              largest = arr[i];
            }
        }
    return largest;
    }
}
let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;