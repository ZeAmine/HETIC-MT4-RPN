function rpn(expression) {
  const stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    MOD: (a, b) => a % b,
    NEGATE: (a) => -a,
  };

  const tokens = expression.split(" ");

  for (const token of tokens) {
    if (token in operators) {
      const operator = operators[token];
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = operator(operand1, operand2);
      stack.push(result);
    } else {
      const number = parseFloat(token);
      stack.push(number);
    }
  }

  return stack.pop();
}

export default rpn;
