import { expect, test, vi } from "vitest";
import { sayGoodBye } from "@/04/02/greet";

// vi.mock の第一引数で呼んでいるのは関数ではなくモジュールのパス
// 第二引数があるが、sayGoodBye 関数のみモック化の定義がされており、greet 関数の定義が不十分になっている
vi.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

// greet 関数のモック定義が不十分のため、以下のテストコードは失敗となる
// test("挨拶が未実装（本来の実装ではない）", () => {
//   expect(greet("Taro")).toBe(undefined);
// });

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
