import { performOperation } from ".";

describe("performOperation", () => {
  test("Addition", () => {
    const stack = [2, 3];
    performOperation("+", stack);
    expect(stack).toEqual([5]);
  });

  test("Subtraction", () => {
    const stack = [5, 3];
    performOperation("-", stack);
    expect(stack).toEqual([2]);
  });

  test("Multiplication", () => {
    const stack = [2, 3];
    performOperation("*", stack);
    expect(stack).toEqual([6]);
  });

  test("Division", () => {
    const stack = [6, 3];
    performOperation("/", stack);
    expect(stack).toEqual([2]);
  });

  test("Division by 0", () => {
    const stack = [8, 0];
   
    expect(() =>  performOperation("/", stack)).toThrow();
  });

  test("Modulo", () => {
    const stack = [5, 2];
    performOperation("MOD", stack);
    expect(stack).toEqual([1]);
  });

  test("Unary Negation", () => {
    const stack = [5];
    performOperation("NEGATE", stack);
    expect(stack).toEqual([-5]);
  });

  test("Undefined operants", () => {
    const stack = [undefined, undefined];
    expect(() => performOperation("+", stack)).toThrow();
  });
});
