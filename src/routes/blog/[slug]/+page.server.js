import { getBlogData } from "../../../lib/index.js";

export async function load({ params }) {
  const slug = params.slug;

  const blog = getBlogData()[0];

  console.log("blog :>> ", blog);

  return {
    slug,
    blog,
  };
}
