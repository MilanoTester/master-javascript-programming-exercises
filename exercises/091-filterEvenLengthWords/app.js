function filterEvenLengthWords(words) {
    // your code here
    let myArray = words.filter((number) => number.length % 2 == 0);
    return myArray;
}
let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
