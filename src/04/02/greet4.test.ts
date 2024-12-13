import { expect, test, vi } from "vitest";
import { greet, sayGoodBye } from "@/04/02/greet";

vi.mock("./greet", async () => ({
  // sayGoodBye 関数のみモック化の定義をおこない、それ以外の関数はそのまま import される
  // importActual は async/await の構文で呼び出す必要がある
  ...(await vi.importActual("./greet")),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
