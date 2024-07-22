function isEvenWithoutModulo(num) {
    // your code here
    let r = Math.abs(num);
    while (r >= 2) {
        r = (Math.abs(num)) - 2;
        num = r;
    }

    if (r == 0) {
        return true;
    } else {
        return false;
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
