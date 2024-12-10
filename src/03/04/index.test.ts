import { describe, expect, test } from "vitest";
import { add, sub } from "@/03/04";

// 条件分岐のある関数のテスト
describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は 100 である", () => {
      expect(add(70, 80)).toBe(100);
    });
  });
  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の下限は 0 である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
});
