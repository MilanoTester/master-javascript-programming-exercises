// Write your function here
function isOddLength(word) {
    let length = word.length;
    if (!(length % 2 == 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isOddLength("seven"));