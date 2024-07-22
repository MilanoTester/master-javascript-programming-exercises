function modulo(num1, num2) {
    // your code here
    let sign = num1;
    let r = num2;
    while (r >= num2) {
        r = Math.abs(num1) - num2;
        num1 = r;
    }

    if (sign < 0) {
        r = r*(-1);
    }

    return r;
}

let output = modulo(25, 4);
console.log(output); // --> 1
