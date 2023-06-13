import { isOperator } from "./utils/isOperator";
import { performOperation } from "./utils/performOperation";


export function calculateRPN(expression: string): number {
  const tokens = expression.split(' ');

  const operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
    MOD: (a: number, b: number) => a % b,
    NEGATE: (a: number) => -a,
  };

  const stack: number[] = [];

  for (const token of tokens) {
    if (isOperator(token)) {
      const operation = operators[token];
      performOperation(operation, stack);
    } else {
      const number = parseFloat(token);
      if (isNaN(number)) {
        throw new Error('Invalid expression');
      }
      stack.push(number);
    }
  }

  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return stack.pop()!;
}

