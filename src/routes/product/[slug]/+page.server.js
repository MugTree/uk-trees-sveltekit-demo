import { getMarkdownData, pathToProducts } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const products = await getMarkdownData("products");
  const product = products.find((a) => a.slug === slug);

  if (product === undefined) {
    throw error(404, "Product not found");
  }

  return { products, product };
}
