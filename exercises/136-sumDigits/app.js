function sumDigits(num) {
    // your code here
    let sum = 0;
    let string = num.toString();
    let arr = string.split("");

    if (arr[0] == "-") {
        arr.shift();
        arr[0] = arr[0] * (-1);
    }

    for (i=0; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
    }
    return sum;
}
let output = sumDigits(-316);
console.log(output); // --> 4
