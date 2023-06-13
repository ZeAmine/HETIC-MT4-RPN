import { isOperator } from ".";


describe("isOperator", () => {
    test('Valid Operator', () => {
        expect(isOperator('+')).toBe(true);
      });
      
      test('Invalid Operator', () => {
        expect(isOperator('%')).toBe(false);
      });
      
      test('Empty Operator List', () => {
        expect(isOperator('1')).toBe(false);
      });
})