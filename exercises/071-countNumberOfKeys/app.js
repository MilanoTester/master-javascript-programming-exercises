let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    let i=0; // properties index
    for (let x in obj) {
        i++;
    }
    return i;
}
let output = countNumberOfKeys(obj);
console.log(output); // --> 6
