const sum = (a, b) => {
  if (!(a && b)) {
    //to prevent a null or undefined input
    //The logic required having both a and b.. not just a or b.
    return "Invalid Input";
  }
  return a + b;
};

const square = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a * a;
};

const cubed = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a * a * a;
};

module.exports = { sum, square, cubed };
