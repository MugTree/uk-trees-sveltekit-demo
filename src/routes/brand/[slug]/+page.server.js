import { getBrandData } from "../../../lib/index.js";

export async function load({ params }) {
  const slug = params.slug;

  const brands = getBrandData();

  console.log("data :>> ", brands);

  return {
    slug,
    brands,
  };
}
