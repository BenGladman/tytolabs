<script lang="ts">
  import EmailIcon from "./EmailIcon.svelte";
  import GitHubIcon from "./GitHubIcon.svelte";
  import LinkedInIcon from "./LinkedInIcon.svelte";
  import StackOverflowIcon from "./StackOverflowIcon.svelte";
</script>

<footer>
  <p class="links">
    <a href="https://github.com/BenGladman">
      <GitHubIcon />
    </a>
    <a href="https://stackoverflow.com/users/story/2907553">
      <StackOverflowIcon />
    </a>
    <a href="https://www.linkedin.com/in/ben-gladman/">
      <LinkedInIcon />
    </a>
    <a href="mailto:ben.gladman@gmail.com">
      <EmailIcon />
    </a>
  </p>
  <p class="registration">Company number 13523740</p>
</footer>

<style>
  footer {
    inset: auto 0 2rem 0;
    position: absolute;
  }

  p {
    white-space: nowrap;
    margin: 1rem 0 0 0;
  }

  .links {
    display: flex;
    gap: 5px;
    justify-content: center;
    white-space: nowrap;
  }

  .registration {
    font-size: 0.8rem;
    margin-top: 0;
    text-align: center;
  }

  a {
    color: var(--anchor);
  }

  a:hover {
    filter: brightness(120%);
  }

  a > :global(svg) {
    fill: var(--primary);
    filter: drop-shadow(var(--drop-shadow));
    padding: 1rem;
    transition: fill 5s ease;
  }
</style>
