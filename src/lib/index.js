import data from "../../data/data.json";
import { parse } from "node-html-parser";

const getBrandData = () => data;

export const getBlogData = async () => {
  const blogMarkdown = import.meta.glob("../../data/posts/**/*.md");
  const iterables = Object.entries(blogMarkdown);

  let posts = await Promise.all(
    iterables.map(async ([path, article]) => {
      const a = await article();

      console.log("a :>> ", a.metadata);

      const html = parse(a.default.render().html);

      const blogSlug = path
        .replace(/(\/index)?\.md/, "")
        .split("/")
        .pop();
      return {
        meta: a.metadata,
        slug: blogSlug,
        url: "/blog/" + blogSlug,
        html: html,
      };
    })
  );

  console.log("posts :>> ", posts);

  return posts;
};
