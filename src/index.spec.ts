import rpn from ".";

test("Le résultat d'une expression simple est correct", () => {
  expect(rpn("1 1 +")).toEqual(2);
  expect(rpn("4 3 MOD")).toEqual(1);
  expect(rpn("1 NEGATE")).toEqual(-1);
  expect(rpn("1 1 NEGATE +")).toEqual(0);
  expect(rpn("5 2 * 10 -")).toEqual(0);
});
