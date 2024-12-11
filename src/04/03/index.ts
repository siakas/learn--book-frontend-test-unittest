import { getMyProfile } from "@/04/fetchers";

export const getGreet = async () => {
  // テストしたいのはここのデータ取得と
  const data = await getMyProfile();

  // 取得したデータをここで連結する処理
  if (!data.name) {
    return `Hello, anonymous user!`;
  }
  return `Hello, ${data.name}!`;
};
