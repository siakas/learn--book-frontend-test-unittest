import { getMyArticles } from "@/04/fetchers";

/**
 * カテゴリ別に記事のリンクを取得する関数
 * @param category - 記事をフィルタリングするカテゴリ
 * @returns カテゴリに一致する記事のリンクの配列、または一致する記事がない場合は null を返す Promise
 */
export const getMyArticleLinksByCategory = async (category: string) => {
  // データを取得する関数
  const data = await getMyArticles();

  // 取得したデータのうち、指定したタグが含まれる記事にしぼり込む
  const articles = data.articles.filter((article) =>
    article.tags.includes(category),
  );

  // 該当記事がない場合 null を返す
  if (!articles.length) {
    return null;
  }

  // 該当記事がある場合、一覧向けに加工したデータを返す
  return articles.map((article) => ({
    title: article.title,
    link: `/articles/${article.id}`,
  }));
};
