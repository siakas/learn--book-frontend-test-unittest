import { add, sub } from "@/03/02";

describe("四則演算", () => {
  // add
  describe("add", () => {
    test("1 + 1 は 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("1 + 2 は 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  // sub
  describe("sub", () => {
    test("1 - 1 は 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2 - 1 は 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});
