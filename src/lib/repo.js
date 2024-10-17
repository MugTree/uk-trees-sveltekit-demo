export const getMarkdownData = async () => {
  const markdown = import.meta.glob("../../data/trees/**/*.md");

  console.log("markdown :>> ", markdown);

  const iterables = Object.entries(markdown);

  let pages = await Promise.all(
    iterables.map(async ([path, page]) => {
      const a = await page();

      console.log("a :>> ", a);

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

  return pages;
};
