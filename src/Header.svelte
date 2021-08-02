<script lang="ts">
  import { cycleLighting } from "./lighting";
  import logoPath from "./tyto.svg";
</script>

<header>
  <img src={logoPath} alt="Tyto Logo" on:click={() => cycleLighting()} />
  <h1>Tyto Labs</h1>
  <p>Software design and development</p>
</header>

<style>
  header {
    inset: 1rem 0 auto 0;
    position: absolute;
    text-align: center;
  }

  img {
    filter: drop-shadow(var(--drop-shadow));
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
