import isLeapYear from ".";

test("By default, a year is NOT leap", () => {
  expect(isLeapYear(2023)).toEqual(false);
});

test("A year is leap if it is divisible by 4", () => {
  expect(isLeapYear(2024)).toEqual(true);
});

test("A year is NOT leap if it is divisible by 100", () => {
  expect(isLeapYear(2100)).toEqual(false);
});

test("A year is leap if it is divisible by 400", () => {
  expect(isLeapYear(2400)).toEqual(true);
});
