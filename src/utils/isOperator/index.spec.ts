import { isOperator } from ".";


describe("isOperator", () => {
    test('Valid Operator', () => {
        expect(isOperator('+')).toBe(true);
      });
      
      test('Invalid Operator %', () => {
        expect(isOperator('%')).toBe(false);
      });
      
      test('Invalid Operator 1', () => {
        expect(isOperator('1')).toBe(false);
      });

      test('Undefined Operator', () => {
        expect(() => isOperator(undefined)).toThrow();
      });
})