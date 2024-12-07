export const sum = (a: number, b: number) => a + b;

export const add = (...args: number[]) =>
  args.reduce((acc, cur) => acc + cur, 0);
