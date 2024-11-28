export async function load({ data }) {
  let { tree, trees, qa, treeMap } = data;

  // page content is grabbed here as allows for unserialised content to be passed
  const component = await import(
    `../../../../data/trees/${data.tree.slug}/index.md`
  );
  return {
    trees,
    tree,
    qa,
    component: component.default,
    treeMap,
  };
}
