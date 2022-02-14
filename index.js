const sum = (a, b) => {
  if (!(a && b)) {
    //to prevent a null or undefined input
    //The logic required having both a and b.. not just a or b.
    return "Invalid Input";
  }
  return a + b;
};

module.exports = sum;
