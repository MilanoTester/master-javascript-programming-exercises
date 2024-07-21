function addToBackOfNew(arr, element) {
    // your code here
    let myArray = [].concat(arr);
    myArray.push(element);
    return myArray;
}
let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
