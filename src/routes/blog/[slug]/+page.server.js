import { getMarkdownData, PathToPosts } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const posts = await getMarkdownData("posts");
  const post = posts.find((p) => p.slug === slug);

  if (post === undefined) {
    throw error(404, "Post not found");
  }

  return {
    post,
    posts,
  };
}
