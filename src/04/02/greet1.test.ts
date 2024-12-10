import { expect, test } from "vitest";
import { greet } from "@/04/02/greet";

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});
