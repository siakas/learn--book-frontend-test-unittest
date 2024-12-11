import { describe, expect, test, vi } from "vitest";
import * as Fetchers from "../fetchers";
import { getGreet } from "@/04/03";

// fetchers.ts 内の関数すべてをモック化し undefined を返すようにする
vi.mock("../fetchers");

describe("getGreet", () => {
  test("データ取得成功時：ユーザー名がない場合", async () => {
    // getMyProfile が resolve した時の値を再現
    vi.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
    });
    // getGreet の Promise を resolve させて "Hello, anonymous user!" が返ってくることを確認
    await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
  });
  test("データ取得成功時：ユーザー名がある場合", async () => {
    vi.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
      name: "taroyamada",
    });
    await expect(getGreet()).resolves.toBe("Hello, taroyamada!");
  });
});
