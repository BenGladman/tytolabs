<script lang="ts">
  import { Cloud } from "./Cloud";

  const MAX_X = 1000;
  const MAX_CLOUDS = 5;
  const INITIAL_CLOUDS = 2;

  let svg: SVGSVGElement;
  let clouds: Cloud[] = [];
  export let breezeX = 0;
  export let breezeZ = 10;

  for (let i = 0; i < INITIAL_CLOUDS; i += 1) {
    clouds.push(new Cloud(MAX_X, true));
  }

  let lastTs = performance.now();

  function animate(ts: number) {
    const dt = (ts - lastTs) / 1000;
    lastTs = ts;

    clouds = clouds.map((cloud) => cloud.blow(breezeX * dt, breezeZ * dt));

    clouds = clouds.filter((cloud) => !cloud.isOffscreen);

    if (clouds.length < MAX_CLOUDS && Math.random() > 0.99) {
      clouds = [new Cloud(MAX_X), ...clouds];
    }

    requestAnimationFrame(animate);
  }

  animate(lastTs);
</script>

<svg
  bind:this={svg}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-1000 -1000 2000 2000"
  preserveAspectRatio="xMidYMid slice"
>
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.4" fy="0.2">
      <stop offset="0%" stop-color="hsla(231, 30%, 99%, 1)" />
      <stop offset="10%" stop-color="hsla(231, 20%, 95%, 0.8)" />
      <stop offset="50%" stop-color="hsla(252, 6%, 45%, 0)" />
    </radialGradient>
  </defs>

  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.001"
      numOctaves="5"
      result="turbulence"
    />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="400"
      xChannelSelector="R"
      yChannelSelector="G"
    />
  </filter>

  {#each clouds as cloud (cloud.id)}
    <ellipse
      {...cloud.svgProps}
      fill="url(#Gradient)"
      style="filter: url(#displacementFilter)"
    />
  {/each}
</svg>

<style>
  svg {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
