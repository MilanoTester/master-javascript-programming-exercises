// Write your function here
function isSameLength (word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
  
    if (length1 == length2) {
        return true;
    } else {
        return false;
    }
}
console.log(isSameLength("words", "super"));