<script lang="ts">
  import Clouds from "./Clouds.svelte";
  import emailSvg from "./email.svg";
  import githubSvg from "./github.svg";
  import linkedinSvg from "./linkedin.svg";
  import stackoverflowSvg from "./stackoverflow.svg";
</script>

<Clouds />

<header>
  <h1>Tyto Labs</h1>
  <p>Software design and development</p>
</header>

<main />

<footer>
  <p class="links">
    <a href="https://github.com/BenGladman">
      <img src={githubSvg} alt="GitHub" />
    </a>
    <a href="https://stackoverflow.com/users/story/2907553">
      <img src={stackoverflowSvg} alt="Stack Overflow" />
    </a>
    <a href="https://www.linkedin.com/in/ben-gladman/">
      <img src={linkedinSvg} alt="LinkedIn" />
    </a>
    <a href="mailto:ben.gladman@gmail.com">
      <img src={emailSvg} alt="email" />
    </a>
  </p>
  <p class="registration">Company number 13523740</p>
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
    --drop-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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
    text-shadow: var(--drop-shadow);
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
    inset: 2rem 0 auto 0;
    position: absolute;
    text-align: center;
  }

  footer {
    inset: auto 0 2rem 0;
    position: absolute;
  }

  p {
    white-space: nowrap;
    margin: 1rem 0 0 0;
  }

  img {
    filter: drop-shadow(var(--drop-shadow));
  }

  .links {
    display: flex;
    gap: 5px;
    justify-content: center;
    white-space: nowrap;
  }

  .registration {
    font-size: 0.8rem;
    margin-top: 0.3rem;
    text-align: center;
  }

  a {
    color: var(--anchor);
  }

  a:hover {
    filter: brightness(120%);
  }
</style>
