import { getMapData, getMarkdownData, getQAData } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  let trees = await getMarkdownData();
  const treeMaps = await getMapData();
  const qAndAs = await getQAData();

  const { slug } = params;
  const tree = trees.find((a) => a.slug === slug);

  if (tree === undefined) {
    throw error(404, "Product not found");
  }

  trees = trees.filter((t) => t.meta.slug !== slug);

  const treeMap = treeMaps.find((a) => a.slug === slug);
  const qa = qAndAs.find((a) => a.slug === slug);

  return { trees, tree, qa, treeMap };
}
