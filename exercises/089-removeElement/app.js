// Write your function here
function removeElement (arr, discarder) {
    let myArray = arr.filter((number) => number !== discarder);
    return myArray;
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
