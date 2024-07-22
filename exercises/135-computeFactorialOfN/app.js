function computeFactorialOfN(n) {
    // your code here
    if (n == 0) {
        return "INVALID NUMBER";
    } else {
        let factorial = 1;
        for (i=1; i <= n; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}
let output = computeFactorialOfN(4);
console.log(output); // --> 24
