export async function load({ data }) {
  const { tree, trees, qa } = data;

  // page content is grabbed here as allows for unserialised content to be passed
  const component = await import(
    `../../../../data/trees/${data.tree.slug}/index.md`
  );
  return {
    trees,
    tree,
    qa,
    component: component.default,
  };
}
