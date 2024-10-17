export async function load({ data }) {
  const { post, posts } = data;

  const component = await import(`../../../../data/posts/${post.slug}.md`);
  return {
    posts,
    post,
    component: component.default,
  };
}
