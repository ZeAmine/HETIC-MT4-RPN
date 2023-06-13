import { performOperation } from ".";

const operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
    MOD: (a: number, b: number) => a % b,
    NEGATE: (a: number) => -a,
  };

describe("performOperation", () => {
  test("Addition", () => {
    const stack = [2, 3];
    performOperation(operators["+"], stack);
    expect(stack).toEqual([5]);
  });

  test("Subtraction", () => {
    const stack = [5, 3];
    performOperation(operators["-"], stack);
    expect(stack).toEqual([2]);
  });

  test("Multiplication", () => {
    const stack = [2, 3];
    performOperation(operators["*"], stack);
    expect(stack).toEqual([6]);
  });

  test("Division", () => {
    const stack = [6, 3];
    performOperation(operators["/"], stack);
    expect(stack).toEqual([2]);
  });

  test("Division by 0", () => {
    const stack = [8, 0];
    performOperation(operators["/"], stack);
    expect(stack).toThrowError();
  });

  test("Modulo", () => {
    const stack = [5, 2];
    performOperation(operators["MOD"], stack);
    expect(stack).toEqual([1]);
  });

  test("Unary Negation", () => {
    const stack = [5];
    performOperation(operators["NEGATE"], stack);
    expect(stack).toEqual([-5]);
  });
});
