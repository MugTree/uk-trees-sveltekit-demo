import { getBlogData } from "../../../lib/repo.js";

export async function load({ params }) {
  const slug = params.slug;

  const posts = await getBlogData();

  console.log("data :>> ", posts);

  return {
    slug,
    posts: posts,
  };
}
