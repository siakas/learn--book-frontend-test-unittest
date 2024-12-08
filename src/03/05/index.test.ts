import { add, RangeError, sub } from "@/03/05";

// 閾値と例外処理のテスト
describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は 100 である", () => {
      expect(add(70, 80)).toBe(100);
    });
    test("引数が 0〜100 の範囲外だった場合、例外をスローする", () => {
      const message = "入力値は0〜100の間で入力してください";
      // 例外のスローではコールバックの形式で expect() に渡す必要がある
      expect(() => add(-10, 10)).toThrow(message);
      expect(() => add(10, -10)).toThrow(message);
      expect(() => add(-10, 110)).toThrow(message);
    });
  });

  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の下限は 0 である", () => {
      expect(sub(70, 80)).toBe(0);
    });
    test("引数が 0〜100 の範囲外だった場合、例外をスローする", () => {
      // RangeError がスローされることを確認（この場合はメッセージは確認していない）
      expect(() => sub(-10, 10)).toThrow(RangeError);
      expect(() => sub(10, -10)).toThrow(RangeError);
      // Error は RangeError の extends 元なので成功するが、RangeError を指定するほうが適切
      expect(() => sub(-10, 110)).toThrow(Error);
    });
  });
});
