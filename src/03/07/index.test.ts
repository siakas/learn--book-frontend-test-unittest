import { timeout, wait } from "@/03/07";

describe("非同期処理", () => {
  describe("wait", () => {
    // Promise を返し、then に渡す関数内にアサーションを書く方法
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return wait(50).then((duration) => {
        expect(duration).toBe(50);
      });
    });

    // resolves マッチャーを使用したアサーションを返す方法
    // resolve したときの値を検証したい場合ならこの書き方が使えるが限定的かも
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return expect(wait(50)).resolves.toBe(50);
    });

    // async/await を使った書き方
    // resolves マッチャーも併用している
    test("指定時間待つと、経過時間をもって resolve される", async () => {
      await expect(wait(50)).resolves.toBe(50);
    });

    // async/await を使った書き方
    // expect の検証値である Promise が解決するのを await で待ってからアサーションに展開する方法
    // もっともシンプルな書き方
    test("指定時間待つと、経過時間をもって resolve される", async () => {
      expect(await wait(50)).toBe(50);
    });
  });

  // 必ず reject する Promise を返す timeout 関数のテスト
  describe("timeout", () => {
    // Promise を返し、catch に渡す関数内にアサーションを書く方法
    test("指定時間待つと、経過時間をもって reject される", () => {
      return timeout(50).catch((duration) => {
        expect(duration).toBe(50);
      });
    });

    // rejects マッチャーを使用したアサーションを返す方法
    test("指定時間待つと、経過時間をもって reject される", () => {
      return expect(timeout(50)).rejects.toBe(50);
    });

    // async/await と rejects マッチャーを使った書き方
    test("指定時間待つと、経過時間をもって reject される", async () => {
      await expect(timeout(50)).rejects.toBe(50);
    });
  });
});

// try-catch を使って Promise の reject をキャッチする方法
test("指定時間待つと、経過時間をもって reject される", async () => {
  // アサーションが一度実行されることを明示
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (error) {
    // アサーションが一度実行されることを冒頭で明示しているため、
    // ここに到達しないテストは失敗となる
    expect(error).toBe(50);
  }
});
