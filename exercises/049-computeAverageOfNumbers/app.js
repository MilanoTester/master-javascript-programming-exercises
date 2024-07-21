// Write your function here
let input = [1, 2, 3, 4, 5];

function computeAverageOfNumbers(array) {
    if (array.length == 0) {
        return 0;
    } else {

        let divisor = array.length;
        let sum = 0;
        for (i = 0; i < divisor; i++) {
            sum = sum + array[i];
        }
        average = sum / divisor;
        return average;
    }
}
console.log(computeAverageOfNumbers(input));
