import { expect, test, vi } from "vitest";
import { greet } from "@/04/02/greet";

// vi.mock を実行すると対象モジュールがモック化され置き換え準備がされる
// 第二引数がない場合はモジュール内のすべての関数が undefined を返すモック関数化される
vi.mock("./greet");

// vi.mock で呼ばれた関数は本来の結果を無視して undefined を返す
test("挨拶を返さない（本来の実装ではない）", () => {
  expect(greet("Taro")).not.toBe("Hello! Taro.");
  expect(greet("Taro")).toBe(undefined);
});
