import { getBlogData } from "../../../lib/index.js";

export async function load({ params }) {
  const slug = params.slug;

  const blog = await getBlogData();

  console.log("blog :>> ", blog);

  return {
    slug,
  };
}
