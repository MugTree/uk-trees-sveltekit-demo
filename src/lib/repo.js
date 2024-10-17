// https://github.com/vitejs/vite/discussions/15397
// having to return all the maps and then grab an item
// can use dynamic paths :(
// not a massive issue as site is going to be a static render

// would return all of the page data here its not serialisable
export const getMarkdownData = async () => {
  const markdown = import.meta.glob("../../data/trees/**/*.md");
  const iterables = Object.entries(markdown);

  const pages = await Promise.all(
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

export const getMapData = async () => {
  const treeMaps = import.meta.glob("../../data/trees/**/map.json");
  const iterables = Object.entries(treeMaps);

  const maps = await Promise.all(
    iterables.map(async ([path, file]) => {
      const tm = await file();

      return {
        slug: path.split("/")[4],
        data: tm.default,
      };
    })
  );

  return maps;
};

export const getQAData = async () => {
  const qanda = import.meta.glob("../../data/trees/**/qa.json");
  const iterables = Object.entries(qanda);

  const qandas = await Promise.all(
    iterables.map(async ([path, file]) => {
      const qa = await file();

      return {
        slug: path.split("/")[4],
        data: qa.default,
      };
    })
  );

  return qandas;
};
