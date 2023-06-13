export function performOperation(operator: string, stack: number[]): void {
  const operators = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
    MOD: (a: number, b: number) => a % b,
    NEGATE: (a: number) => -a,
  };

  if (operator === "NEGATE") {
    const a = stack.pop();
    const result = operators[operator](a);
    stack.push(result);
  } else {
    const a = stack.pop();
    const b = stack.pop();
    if (operator === "/" && a === 0) {
      throw new Error("Invalid expression");
    }

    if (a === undefined || b === undefined) {
      throw new Error("Invalid expression");
    }

    const result = operators[operator](b, a);
    stack.push(result);
  }
}
