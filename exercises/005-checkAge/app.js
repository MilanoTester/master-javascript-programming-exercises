function checkAge(name, age) {
  // your code here
  let message;
  if (age >= 21) {
    message = "Welcome, " + name + "!";
  } else {
    message = "Go home, " + name + "!";
  }
  return message
}
console.log(checkAge("Adrian",21));


