


export function isOperator(token: string): boolean {
    const operators = ['+', '-', '*', '/', 'MOD', 'NEGATE'];
    return operators.includes(token);
  }