function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    } else {
        let length = 0;
        var longest = '';
        var noStrings = 0;
        for (i=0; i < arr.length; i++) {
            if ((arr[i].length !== 0) && (arr[i].length > length)) {
                length = arr[i].length;
                longest = arr[i];
                noStrings = 1;
            }
        }
    }
    if (noStrings == 0) {
        return "";
    } else {
        return longest;
    }
}
let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
