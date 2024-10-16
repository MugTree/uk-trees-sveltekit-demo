import { getBlogData } from "../../../lib/index.js";

export async function load({ params }) {
  const slug = params.slug;

  const data = await getBlogData();

  console.log("data :>> ", data);

  return {
    slug,
  };
}
