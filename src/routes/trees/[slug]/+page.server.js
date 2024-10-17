import { getMapData, getMarkdownData, getQAData } from "../../../lib/repo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  const trees = await getMarkdownData();
  const treeMaps = await getMapData();
  const qAndAs = await getQAData();
  const treeData = trees.find((a) => a.slug === slug);

  if (treeData === undefined) {
    throw error(404, "Product not found");
  }

  const treeMap = treeMaps.find((a) => a.slug === slug);
  const qa = qAndAs.find((a) => a.slug === slug);

  console.log("treeData :>> ", treeData);
  console.log("treeMap :>> ", treeMap);
  console.log("qa :>> ", qa);

  return { trees, tree: treeData };
}
