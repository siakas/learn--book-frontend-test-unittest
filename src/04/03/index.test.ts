import { describe, expect, test, vi } from "vitest";
import { getGreet } from "@/04/03";
import { httpError } from "@/04/fetchers/fixture";
import * as Fetchers from "../fetchers";

// fetchers.ts 内の関数すべてをモック化し undefined を返すようにする
vi.mock("../fetchers");

describe("getGreet", () => {
  test("データ取得成功時：ユーザー名がない場合", async () => {
    // getMyProfile が resolve した時の値を再現
    vi.spyOn(Fetchers, "getMyProfile").mockResolvedValue({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
    });
    // getGreet の Promise を resolve させて "Hello, anonymous user!" が返ってくることを確認
    await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
  });
  test("データ取得成功時：ユーザー名がある場合", async () => {
    vi.spyOn(Fetchers, "getMyProfile").mockResolvedValue({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
      name: "taroyamada",
    });
    await expect(getGreet()).resolves.toBe("Hello, taroyamada!");
  });
  test("データ取得失敗時", async () => {
    // getMyProfile が reject した時の値を再現
    vi.spyOn(Fetchers, "getMyProfile").mockRejectedValue(httpError);
    // getGreet の Promise が reject した時のエラーメッセージを検証
    await expect(getGreet()).rejects.toMatchObject({
      err: { message: "internal server error" },
    });
  });
  test("データ取得失敗時、エラー相当のデータが例外としてスローされる", async () => {
    expect.assertions(1);
    vi.spyOn(Fetchers, "getMyProfile").mockRejectedValue(httpError);
    try {
      await getGreet();
    } catch (err) {
      expect(err).toMatchObject(httpError);
    }
  });
});
