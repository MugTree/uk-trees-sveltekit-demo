import { getMarkdownData, PathToPosts } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const brands = await getMarkdownData("brands");
  const brand = brands.find((p) => p.slug === slug);

  const products = await getMarkdownData("products");

  const brandProducts = products
    .filter(({ meta }) => meta.brand === brand.meta.name)
    .map((p) => ({
      ...p,
      meta: {
        ...p.meta,
        name: p.meta.name.replace(p.meta.brand, ""),
      },
    }));

  console.log("brandProducts :>> ", brandProducts);
  if (brand === undefined) {
    throw error(404, "Post not found");
  }

  return {
    brand,
    brands,
    products: brandProducts,
  };
}
