
let obj = {age: 19,};

function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person['age'] >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isPersonOldEnoughToVote(obj));
