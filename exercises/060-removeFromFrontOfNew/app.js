function removeFromFrontOfNew(arr) {
    // your code here
    let firstElement = 1;
    let lastElement = arr.length;
    let newArray = arr.slice(firstElement, lastElement);
    return newArray;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
