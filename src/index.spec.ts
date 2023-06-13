import { calculateRPN } from ".";

describe('RPN Calculator', () => {
  test('Addition', () => {
    expect(calculateRPN('2 3 +')).toBe(5);
    expect(calculateRPN('4 6 +')).toBe(10);
  });

  test('Subtraction', () => {
    expect(calculateRPN('5 3 -')).toBe(2);
    expect(calculateRPN('8 2 -')).toBe(6);
  });

  test('Multiplication', () => {
    expect(calculateRPN('2 3 *')).toBe(6);
    expect(calculateRPN('4 5 *')).toBe(20);
  });

  test('Division', () => {
    expect(calculateRPN('6 3 /')).toBe(2);
    expect(calculateRPN('12 4 /')).toBe(3);
  });

  test('Modulo', () => {
    expect(calculateRPN('7 3 MOD')).toBe(1);
    expect(calculateRPN('10 4 MOD')).toBe(2);
  });

  test('Unary Negation', () => {
    expect(calculateRPN('5 NEGATE')).toBe(-5);
  });

  test('Complex Expression', () => {
    expect(calculateRPN('4 2 7 - 6 2 + * +')).toBe(-36);
    expect(calculateRPN('3 10 5 + *')).toBe(45);
  });

  test('Invalid Expressions', () => {
    expect(() => calculateRPN('1 -1 +')).toThrow();
    expect(() => calculateRPN('1 0 /')).toThrow();
    expect(() => calculateRPN('1 1 1 - /')).toThrow();
    expect(() => calculateRPN('3 c 5 + *')).toThrow();
    expect(() => calculateRPN('3 10 8 5 + *')).toThrow();
  });
});
