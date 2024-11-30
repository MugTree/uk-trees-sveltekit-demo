<script lang="js">
  import { base } from "$app/paths";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<svelte:head />

<main class="container">
  <header>
    <h3 style="font-size: 21px; font-weight: bold">
      <a class="secondary" href={base + "/"}>UK Trees</a> 🌿
    </h3>
  </header>
  <section>{@render children?.()}</section>
</main>
<footer class="container">
  <hr />
  <p>2024</p>
</footer>
