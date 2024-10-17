export async function load({ data }) {
  const { product, products } = data;

  const component = await import(
    `../../../../data/products/${data.product.slug}.md`
  );
  return {
    products,
    product,
    component: component.default,
  };
}
