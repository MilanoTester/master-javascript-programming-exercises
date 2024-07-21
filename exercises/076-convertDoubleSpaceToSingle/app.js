function convertDoubleSpaceToSingle(str) {
    // your code here
    let arr = str.split("  ");
    let newString ="";
    for (i=0; i < (arr.length - 1); i++) {
        newString = newString + arr[i] + " ";
    }
    let lastString = arr.length - 1;
    newString = newString + arr[lastString];
    return newString;
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
