// Write your function here
function keep (arr, keeper) {
    let myArray = [];
    for (i=0; i < arr.length; i++) {
        if (arr[i] == keeper) {
            myArray.push(keeper);
        }
    }
    return myArray
}
let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]
