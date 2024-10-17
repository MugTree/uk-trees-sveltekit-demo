<script lang="js">
  import "../pico.css";

  export let data;

  console.log("head data :>> ", data);
</script>

<svelte:head />

<main class="container">
  <header>
    <nav>
      <ul>
        <li><strong>Acme Corp</strong></li>
      </ul>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
      </ul>
    </nav>
  </header>
  <hr />
  <section><slot /></section>
</main>
<footer class="container">
  <hr />
  <p>© 2024</p>
</footer>
