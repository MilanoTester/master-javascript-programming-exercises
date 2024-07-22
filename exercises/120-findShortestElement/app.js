function findShortestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    } else {
        let length = 500;
        let shortest = '';
        for (i=0; i < arr.length; i++) {
            if (arr[i].length < length) {
                length = arr[i].length;
                shortest = arr[i];
            }
        }
    return shortest;
    }
}
let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'