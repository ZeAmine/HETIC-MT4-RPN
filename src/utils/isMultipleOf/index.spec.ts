import isMultipleOf from ".";

describe("Test of isMultipleOf()", () => {
  test("A number is divisible by another one if their modulo equals 0", () => {
    expect(isMultipleOf(3)(3)).toEqual(true);
  });

  test("A number is divisible by another one if their modulo equals 0", () => {
    expect(isMultipleOf(3)(4)).toEqual(false);
  });

  test("A number is divisible by another one if their modulo equals 0", () => {
    expect(isMultipleOf(3)(5)).toEqual(false);
  });

  test("A number is divisible by another one if their modulo equals 0", () => {
    expect(isMultipleOf(3)(6)).toEqual(true);
  });

  test("A number is divisible by another one if their modulo equals 0", () => {
    expect(isMultipleOf(3)(7)).toEqual(false);
  });
});
