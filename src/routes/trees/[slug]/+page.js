export async function load({ data }) {
  const { product, products } = data;

  const component = await import(
    `../../../../data/trees/${data.product.slug}/index.md`
  );
  return {
    products,
    product,
    component: component.default,
  };
}
