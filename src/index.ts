import { isOperator } from "./utils/isOperator";
import { performOperation } from "./utils/performOperation";


export function calculateRPN(expression: string): number {
  const tokens = expression.split(' ');

  const stack: number[] = [];

  for (const token of tokens) {
    try{
      if (isOperator(token)) {

        performOperation(token, stack);
      } else {
        const number = parseFloat(token);
        if (isNaN(number)) {
          throw new Error('Invalid expression');
        }
        stack.push(number);
      }
    }
    catch(e){
      throw new Error('Invalid expression');
    }
    
  }

  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return stack.pop()!;
}

