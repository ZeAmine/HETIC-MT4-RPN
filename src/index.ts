import isMultipleOf from "./utils/isMultipleOf";

const isLeapYear = (year: number): boolean => {
  return (
    (isMultipleOf(4)(year) && !isMultipleOf(100)(year)) || //
    isMultipleOf(400)(year)
  );
};

export default isLeapYear;
