function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length == 0) {
        return 0;
    } else {
        let length = 0;
        for (i=0; i < arr.length; i++) {
            if (arr[i].length > length) {
                length = arr[i].length;
            }
        }
    return length;
    }
}
let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
