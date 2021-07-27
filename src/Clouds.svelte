<script lang="ts">
  import { Cloud } from "./Cloud";

  const MAX_CLOUDS = 10;
  const INITIAL_CLOUDS = 3;
  const FRAME_DURATION = 1 / 24;
  const FORMATION_PERIOD = 5000;

  let svg: SVGSVGElement;
  let clouds: Cloud[] = [];
  export let breezeX = 0;
  export let breezeZ = 10;

  for (let i = 0; i < INITIAL_CLOUDS; i += 1) {
    clouds.push(new Cloud(true));
  }

  let lastTs = performance.now();
  let lastCloudFormed = performance.now();

  function animate(ts: number) {
    const dt = (ts - lastTs) / 1000;
    if (dt > FRAME_DURATION) {
      lastTs = ts;

      const newClouds = clouds
        .map((cloud) => cloud.blow(breezeX * dt, breezeZ * dt))
        .filter((cloud) => !cloud.isOffscreen);

      if (
        clouds.length < MAX_CLOUDS &&
        Math.random() > 0.95 &&
        ts - lastCloudFormed > FORMATION_PERIOD
      ) {
        newClouds.unshift(new Cloud());
        lastCloudFormed = ts;
      }

      clouds = newClouds;
    }

    requestAnimationFrame(animate);
  }

  animate(lastTs);
</script>

<svg
  bind:this={svg}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-1000 -1000 2000 2000"
>
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.4" fy="0.2">
      <stop offset="0%" stop-color="hsla(231, 30%, 99%, 1)" />
      <stop offset="10%" stop-color="hsla(231, 20%, 95%, 0.8)" />
      <stop offset="50%" stop-color="hsla(252, 6%, 45%, 0)" />
    </radialGradient>
  </defs>
</svg>

{#each clouds as cloud (cloud.id)}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1000 -1000 2000 2000"
    style={cloud.svgStyleProp}
  >
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
{/each}

<style>
  svg {
    position: fixed;
    width: 1000px;
    height: 1000px;
    top: calc(50% - 500px);
    left: calc(50% - 500px);
  }
</style>
