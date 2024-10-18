import { getMarkdownData } from "../lib/repo.js";

export async function load() {
  let pages = await getMarkdownData();

  pages = pages.sort((a, b) => new Date(a.meta.date) - new Date(b.meta.date));

  return {
    pages,
  };
}
