function getLongestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    } else {
        let length = 0;
        let longest = '';
        for (i=0; i < arr.length; i++) {
            if (arr[i].length > length) {
                length = arr[i].length;
                longest = arr[i];
            }
        }
    return longest;
    }
}
let output = getLongestElement(['one', 'two', 'three',]);
console.log(output); // --> 'three'
