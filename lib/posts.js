// posts.jsはどこにリクエストを送り、どんな情報を取得するか決めている。
import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// 記事一覧の取得
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// 各記事のIDを取得
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  // 必ずparamsが必要！！
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 記事詳細ページの取得
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return post;
}
