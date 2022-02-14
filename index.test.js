const sum = require("./index");

describe("Should contain tests for sum", () => {
  it("should add two numbers", () => {
    //Arrange
    const a = 4;
    const b = 6;
    const expectedResult = 10;

    //Act
    const actual = sum(a, b);

    //Assert
    expect(actual).toBe(expectedResult);
  });

  it("should return an error for invalid inputs", () => {
    //Arrange
    const a = null;
    const b = 6;
    const expectedResult = "Invalid Input";

    //Act
    const actual = sum(a, b);

    //Assert
    expect(actual).toBe(expectedResult);
  });
});
