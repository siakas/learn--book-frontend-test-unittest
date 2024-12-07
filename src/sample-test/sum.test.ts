import { add, sum } from "@/sample-test/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add", () => {
  expect(add()).toBe(0);
  expect(add(1)).toBe(1);
  expect(add(1, 2, 3)).toBe(6);
});
