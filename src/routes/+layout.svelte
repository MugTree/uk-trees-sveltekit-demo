<script lang="js">
  import "../pico.min.css";
  import "../basics.min.css";

  export let data;

  console.log("head data :>> ", data);
</script>

<svelte:head />

<main class="container">
  <header>
    <h3 style="font-size: 21px; font-weight: bold">
      <a class="secondary" href="/">UK Trees</a> 🌿
    </h3>
  </header>
  <hr />
  <section><slot /></section>
</main>
<footer class="container">
  <hr />
  <p>© 2024</p>
</footer>
