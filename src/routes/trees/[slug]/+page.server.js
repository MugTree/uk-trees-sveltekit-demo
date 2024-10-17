import { getMarkdownData } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const trees = await getMarkdownData();

  const tree = trees.find((a) => a.slug === slug);

  if (tree === undefined) {
    throw error(404, "Product not found");
  }

  return { trees, tree };
}
