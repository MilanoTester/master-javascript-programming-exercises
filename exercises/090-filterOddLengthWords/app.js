function filterOddLengthWords(words) {
    // your code here
    let myArray = words.filter((number) => number.length % 2 !== 0);
    return myArray;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
