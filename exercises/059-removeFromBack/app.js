function removeFromBack(arr) {
    // your code here
    let myArray = arr.pop();
    return arr;
}
let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
