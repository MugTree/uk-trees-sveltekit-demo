export async function load({ data }) {
  const { brand, brands, products } = data;

  const component = await import(`../../../../data/brands/${brand.slug}.md`);

  return {
    brands,
    brand,
    component: component.default,
    products,
  };
}
