<script lang="ts">
  import { lighting, Lighting } from "./lighting";

  let sunrise = false;
  let sunset = false;
  let night = false;

  lighting.subscribe((v) => {
    sunrise = v === Lighting.SUNRISE;
    sunset = v === Lighting.SUNSET;
    night = v === Lighting.NIGHT;
  });
</script>

<div class:sunrise class:sunset class:night>
  <slot />
</div>

<style>
  div {
    --sky-top: hsl(224, 100%, 16%);
    --sky-bottom: hsl(203, 71%, 40%);
    --accent: hsl(20, 100%, 60%);
    --primary: hsl(200, 20%, 80%);
    --anchor: hsl(240, 100%, 85%);
    --drop-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    --cloud1: hsla(231, 30%, 99%, 1);
    --cloud2: hsla(231, 20%, 95%, 0.8);
    --cloud3: hsla(252, 6%, 45%, 0);

    background: linear-gradient(var(--sky-top), var(--sky-bottom));
    color: var(--primary);
    inset: 0;
    min-height: 300px;
    position: fixed;
    text-shadow: var(--drop-shadow);
  }

  .sunrise {
    --sky-top: hsl(203, 97%, 31%);
    --sky-bottom: hsl(28, 76%, 48%);
    --primary: hsl(30, 30%, 90%);
    --cloud1: hsla(32, 54%, 47%, 0.6);
    --cloud2: hsla(38, 42%, 65%, 0.4);
  }

  .sunset {
    --sky-top: hsl(20, 52%, 19%);
    --sky-bottom: hsl(22, 99%, 56%);
    --primary: hsl(10, 30%, 80%);
    --cloud1: hsla(27, 87%, 56%, 0.7);
    --cloud2: hsla(12, 74%, 88%, 0.5);
  }

  .night {
    --sky-top: hsl(212, 88%, 3%);
    --sky-bottom: hsl(206, 97%, 15%);
    --primary: hsl(220, 30%, 70%);
    --cloud1: hsla(208, 53%, 14%, 0.4);
    --cloud2: hsla(201, 31%, 23%, 0.8);
  }
</style>
