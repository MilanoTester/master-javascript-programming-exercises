// Write your function here
function countAllCharacters (str) {
    let arr = str.split('');
    let obj = new Object();
    for (i=0; i < arr.length; i++) {
        let sum = 0;
        for (j=0; j < arr.length; j++) {
            if (arr[i] == arr[j]) { 
                sum = sum + 1;
            }
        }
        obj[arr[i]] = sum;
    }
    return obj;
}
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}