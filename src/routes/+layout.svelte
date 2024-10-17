<script lang="js">
  import "../pico.css";
</script>

<svelte:head />

<main class="container">
  <header>
    <h3 style="font-size:21px;font-weight:700">
      <a class="secondary" href="https://mugtree.github.io/uktrees/">UK Trees</a
      > 🌿
    </h3>
  </header>
  <h1>Gardening site</h1>
  <hr />
  <section><slot /></section>
</main>
<footer class="container">
  <hr />
  <p>© 2024</p>
</footer>
