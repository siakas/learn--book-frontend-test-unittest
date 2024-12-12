import type {
  Article,
  ArticleInput,
  Articles,
  Profile,
} from "@/04/fetchers/type";

const handleResponse = async (res: Response) => {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
};

const host = (path: string) => `https://myapi.testing.com${path}`;

export const getMyProfile = async (): Promise<Profile> => {
  const res = await fetch(host("/my/profile"));
  return handleResponse(res);
};

export const getMyArticles = async (): Promise<Articles> => {
  const res = await fetch(host("/my/articles"));
  return handleResponse(res);
};

export const postMyArticle = async (input: ArticleInput): Promise<Article> => {
  const res = await fetch(host("/my/articles"), {
    method: "POST",
    body: JSON.stringify(input),
  });
  return handleResponse(res);
};
