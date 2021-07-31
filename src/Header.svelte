<script lang="ts">
  import { cycleLighting } from "./lighting";
</script>

<header>
  <h1 on:click={() => cycleLighting()}>Tyto Labs</h1>
  <p>Software design and development</p>
</header>

<style>
  header {
    inset: 2rem 0 auto 0;
    position: absolute;
    text-align: center;
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

  p {
    white-space: nowrap;
    margin: 1rem 0 0 0;
  }
</style>
