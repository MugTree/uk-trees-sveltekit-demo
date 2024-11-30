<script lang="js">
  import { base } from "$app/paths";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

  // console.log(
  //   process.env.NODE_ENV === "development" ? "environment is development" : ""
  // );
  let pro =
    process.env.BASE_PATH === "uk-trees-sveltekit-demo"
      ? "uk-trees-sveltekit-demo"
      : "";
</script>

<svelte:head />

<main class="container">
  {pro}
  <header>
    <h3 style="font-size: 21px; font-weight: bold">
      <a class="secondary" href={base}>UK Trees</a> 🌿
    </h3>
  </header>
  <section>{@render children?.()}</section>
</main>
<footer class="container">
  <hr />
  <p>2024</p>
</footer>
