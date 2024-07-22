function findShortestWordAmongMixedElements(arr) {
    // your code here
        if (arr.length == 0) {
            return "";
        } else {
            let length = 500;
            var shortest = '';
            var noStrings = 0;
            for (i=0; i < arr.length; i++) {
                if ((arr[i].length !== 0) && (arr[i].length < length)) {
                    length = arr[i].length;
                    shortest = arr[i];
                    noStrings = 1;
                }
            }
        }
        if (noStrings == 0) {
            return "";
        } else {
            return shortest;
        }
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
