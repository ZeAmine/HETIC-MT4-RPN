


export function isOperator(token: string): boolean {
    const operators = ['+', '-', '*', '/', 'MOD', 'NEGATE'];
    if(token === undefined) {
        throw new Error('Invalid expression');
    }
    if(token.includes("-") && token.length > 1){
        throw new Error('Invalid expression');
    }

    if(operators.includes(token)){

        return operators.includes(token);
    }
    else {
        return false
    }
  }