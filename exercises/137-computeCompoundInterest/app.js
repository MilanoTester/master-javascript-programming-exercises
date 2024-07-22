function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let p = principal;
  let r = interestRate;
  let n = compoundingFrequency;
  let t = timeInYears;
  let nt = n * t;
  let a = p * (Math.pow((1 + (r/n)),nt));
  let i = a - p;
  return i;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
