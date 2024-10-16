import { getComparionData } from "../../../lib/index.js";

export async function load({ params }) {
  const slug = params.slug;

  const data = getComparionData();
  console.log("data :>> ", data);

  return {
    slug,
    data,
  };
}
