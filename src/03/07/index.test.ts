import { wait } from "@/03/07";

describe("非同期処理", () => {
  describe("wait", () => {
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return wait(50).then((duration) => {
        expect(duration).toBe(50);
      });
    });
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return expect(wait(50)).resolves.toBe(50);
    });
    test("指定時間待つと、経過時間をもって resolve される", async () => {
      await expect(wait(50)).resolves.toBe(50);
    });
    test("指定時間待つと、経過時間をもって resolve される", async () => {
      expect(await wait(50)).toBe(50);
    });
  });
});
