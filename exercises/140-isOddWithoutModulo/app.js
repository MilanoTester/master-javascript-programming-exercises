function isOddWithoutModulo(num) {
    // your code here
    let r = Math.abs(num);
    while (r >= 2) {
        r = (Math.abs(num)) - 2;
        num = r;
    }

    if (r !== 0) {
        return true;
    } else {
        return false;
    }

}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
