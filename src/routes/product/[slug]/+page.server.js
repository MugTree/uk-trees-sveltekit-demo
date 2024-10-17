import { getProductData } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const products = await getProductData();
  const product = products.find((a) => a.slug === slug);

  if (product === undefined) {
    throw error(404, "Article not found");
  }

  return { products, product };
}
