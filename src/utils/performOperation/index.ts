export function performOperation(operation: (a: number, b?: number) => number, stack: number[]): void {
    if (operation.length === 2) {
      const b = stack.pop();
      const a = stack.pop();
  
      if (a === undefined || b === undefined) {
        throw new Error('Invalid expression');
      }
  
      const result = operation(a, b);
      stack.push(result);
    } else {
      const a = stack.pop();
  
      if (a === undefined) {
        throw new Error('Invalid expression');
      }
  
      const result = operation(a);
      stack.push(result);
    }
  }