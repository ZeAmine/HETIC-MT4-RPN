const isMultipleOf =
  (divider: number) =>
  (n: number): boolean =>
    n % divider === 0;

export default isMultipleOf;
