import { describe, expect, test, vi } from "vitest";
import { getMyArticleLinksByCategory } from "@/04/04";
import { dummyArticlesData, httpError } from "@/04/fetchers/fixture";
import * as Fetchers from "../fetchers";

// fetchers.ts 内の関数すべてをモック化し undefined を返すようにする
vi.mock("../fetchers");

// ステータスに応じたモックデータを返すユーティリティ関数
// ユーティリティ化することで、テストごとに vi.spyOn を書く必要がなくなる
const mockGetMyArticles = (status = 200) => {
  if (status > 299) {
    return vi.spyOn(Fetchers, "getMyArticles").mockRejectedValue(httpError);
  }
  return vi
    .spyOn(Fetchers, "getMyArticles")
    .mockResolvedValue(dummyArticlesData);
};

describe("getMyArticleLinksByCategory", () => {
  test("指定したタグをもつ記事が一件もない場合、null が返る", async () => {
    mockGetMyArticles();
    const data = await getMyArticleLinksByCategory("playwright");
    expect(data).toBeNull();
  });

  test("指定したタグをもつ記事が一件以上ある場合、リンク一覧が返る", async () => {
    mockGetMyArticles();
    const data = await getMyArticleLinksByCategory("testing");
    expect(data).toMatchObject([
      {
        title: "TypeScript を使ったテストの書き方",
        link: "/articles/howto-testing-with-typescript",
      },
      {
        title: "Jest ではじめる React のコンポーネントテスト",
        link: "/articles/react-component-testing-with-jest",
      },
    ]);
  });

  test("データ取得に失敗した場合、reject される", async () => {
    mockGetMyArticles(500);
    await getMyArticleLinksByCategory("testing").catch((err) => {
      expect(err).toMatchObject({
        err: { message: "internal server error" },
      });
    });
  });
});
