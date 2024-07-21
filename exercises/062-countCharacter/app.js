function countCharacter(str, char) {
    // your code here
    let myArray = str.split(char);
    let repeated = myArray.length - 1;
    return repeated;
}
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

