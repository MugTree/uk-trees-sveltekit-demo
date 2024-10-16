import { getProductData } from "../../../lib/index.js";

export async function load({ params }) {
  const slug = params.slug;

  const data = await getProductData();

  console.log("data :>> ", data);

  return {
    slug,
  };
}
