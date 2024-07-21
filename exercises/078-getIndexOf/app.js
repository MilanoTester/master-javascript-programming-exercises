// Write your function here
function getIndexOf(char, string) {
    let arr = string.split("");
    let index = -1;
    for (i=0; i < arr.length; i++) {
        if (arr[i] == char) {
            index = i;
            break;
        }

    }
    return index;
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2