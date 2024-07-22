function findSmallestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    } else {
        let smallest = 500;
        for (i=0; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
    return smallest;
    }
}
let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1