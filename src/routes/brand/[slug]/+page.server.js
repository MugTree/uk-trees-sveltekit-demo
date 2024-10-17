import { getMarkdownData, PathToPosts } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const brands = await getMarkdownData("brands");
  console.log("brands :>> ", brands);
  const brand = brands.find((p) => p.slug === slug);

  if (brand === undefined) {
    throw error(404, "Post not found");
  }

  return {
    brand,
    brands,
  };
}
