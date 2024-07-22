function multiply(num1, num2) {
    // your code here
    let product = 0;
    for (i=1; i <= num2; i++) {
        product = product + num1;
    }
    return product;
}
let output = multiply(5, 7);
console.log(output); // --> 28
