export const getMarkdownData = async () => {
  const markdown = import.meta.glob("../../data/trees/**/*.md");

  const iterables = Object.entries(markdown);

  let pages = await Promise.all(
    iterables.map(async ([path, page]) => {
      const a = await page();

      const treeSlug = path
        .replace(/(\/index)?\.md/, "")
        .split("/")
        .pop();

      return {
        meta: a.metadata,
        slug: treeSlug,
      };
    })
  );

  return pages;
};
