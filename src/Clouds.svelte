<script lang="ts">
  import { Cloud } from "./Cloud";

  const NUM_CLOUDS = 6;

  let clouds: Cloud[] = [];

  for (let i = 0; i < NUM_CLOUDS; i += 1) {
    clouds.push(new Cloud(true));
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
  <div class="svg-holder" style={cloud.svgStyleProp}>
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
        {...cloud.ellipseProps}
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
    animation: move var(--duration) linear var(--offset) infinite;
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
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: perspective(var(--perspective))
        translate3d(var(--x), var(--y), var(--nearest));
    }
  }
</style>
