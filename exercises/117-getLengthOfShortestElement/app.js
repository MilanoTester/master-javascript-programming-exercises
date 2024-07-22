function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    } else {
        let length = 500;
        for (i=0; i < arr.length; i++) {
            if (arr[i].length < length) {
                length = arr[i].length;
            }
        }
        return length;
    }
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
