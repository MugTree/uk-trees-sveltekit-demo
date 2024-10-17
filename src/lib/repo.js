export const getMarkdownData = async (path) => {
  let markdown = null;

  switch (path) {
    case "products":
      markdown = import.meta.glob("../../data/products/**/*.md");
      break;
    case "posts":
      markdown = import.meta.glob("../../data/posts/**/*.md");
      break;
    default:
      return null;
  }

  const iterables = Object.entries(markdown);

  let products = await Promise.all(
    iterables.map(async ([path, product]) => {
      const a = await product();

      const prodctSlug = path
        .replace(/(\/index)?\.md/, "")
        .split("/")
        .pop();

      return {
        meta: a.metadata,
        slug: prodctSlug,
      };
    })
  );

  return products;
};
