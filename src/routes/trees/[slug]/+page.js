export async function load({ data }) {
  const { tree, trees } = data;

  const component = await import(
    `../../../../data/trees/${data.tree.slug}/index.md`
  );
  return {
    trees,
    tree,
    component: component.default,
  };
}
