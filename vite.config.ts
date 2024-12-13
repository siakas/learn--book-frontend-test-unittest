/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { coverageConfigDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    // globals: true, // テストファイル内でグローバル変数を使えるようにする
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],

    // テスト対象を定義
    include: ["./src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],

    // カバレッジレポートから除外したいファイルを指定（include / exlude とは別に要設定）
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, "**/_sample/**"],
    },
  },
});
