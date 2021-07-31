<script lang="ts">
  import Clouds from "./Clouds.svelte";
  import Footer from "./footer";
  import Header from "./Header.svelte";
  import Sky from "./Sky.svelte";
</script>

<Sky>
  <Clouds />
  <Header />
  <main />
  <Footer />
</Sky>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }
</style>
