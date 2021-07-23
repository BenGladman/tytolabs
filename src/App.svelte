<script lang="ts">
  import Clouds from "./Clouds.svelte";
</script>

<Clouds />

<header>
  <h1>Tyto Labs</h1>
</header>

<main />

<footer>
  <a href="https://github.com/BenGladman">GitHub</a>
  •
  <a href="https://stackoverflow.com/users/story/2907553">Stack Overflow</a>
  •
  <a href="https://www.linkedin.com/in/ben-gladman/">LinkedIn</a>
  •
  <a href="mailto:ben.gladman@gmail.com">email</a>
</footer>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --sky-top: hsl(224, 100%, 16%);
    --sky-bottom: hsl(203, 71%, 40%);
    --accent: hsl(20, 100%, 60%);
    --primary: hsl(200, 20%, 80%);
    --anchor: hsl(240, 100%, 85%);
  }

  :global(body) {
    margin: 0;
  }

  :global(#app) {
    background: linear-gradient(var(--sky-top), var(--sky-bottom));
    color: var(--primary);
    inset: 0;
    min-height: 300px;
    position: absolute;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: var(--accent);
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1;
    margin: 0;
    text-align: center;
  }

  header {
    inset: 20px 0 auto 0;
    position: absolute;
    text-align: center;
  }

  footer {
    display: flex;
    gap: 5px;
    inset: auto 0 20px 0;
    justify-content: center;
    position: absolute;
    white-space: nowrap;
  }

  a {
    color: var(--anchor);
    display: block;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
