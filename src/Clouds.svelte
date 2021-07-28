<script lang="ts">
  import { createCloud } from "./createCloud";

  const NUM_CLOUDS = 8;

  let clouds = Array.from(Array(NUM_CLOUDS), () => createCloud(true)).sort(
    (c1, c2) => c1.offset - c2.offset
  );

  function animationEnd(id: number) {
    clouds = [createCloud(), ...clouds.filter((c) => c.id !== id)];
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" height="0" width="0">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.4" fy="0.2">
      <stop offset="0%" stop-color="hsla(231, 30%, 99%, 1)" />
      <stop offset="10%" stop-color="hsla(231, 20%, 95%, 0.8)" />
      <stop offset="50%" stop-color="hsla(252, 6%, 45%, 0)" />
    </radialGradient>
  </defs>
</svg>

{#each clouds as cloud (cloud.id)}
  <div
    class="svg-holder"
    style={cloud.style}
    on:animationend={() => animationEnd(cloud.id)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1000 -1000 2000 2000">
      <filter id="filter{cloud.id}">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.003"
          numOctaves="5"
          result="turbulence"
          seed={cloud.id}
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale="300"
          xChannelSelector="R"
          yChannelSelector="A"
        />
      </filter>
      <ellipse
        cx={0}
        cy={0}
        rx={cloud.width}
        ry={cloud.height}
        fill="url(#Gradient)"
        style="filter: url(#filter{cloud.id})"
      />
    </svg>
  </div>
{/each}

<style>
  .svg-holder {
    position: fixed;
    width: 1000px;
    height: 1000px;
    top: calc(50% - 500px);
    left: calc(50% - 500px);
    animation: move var(--duration) linear var(--offset) 1;
  }

  .svg-holder svg {
    width: 1000px;
    height: 1000px;
  }

  @keyframes move {
    0% {
      opacity: 0;
      transform: perspective(var(--perspective))
        translate3d(var(--x), var(--y), var(--farthest));
    }
    50% {
      opacity: 1;
    }
    98% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: perspective(var(--perspective))
        translate3d(var(--x), var(--y), var(--nearest));
    }
  }
</style>
