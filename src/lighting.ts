import { writable } from "svelte/store";

export enum Lighting {
  DAY = "Day",
  SUNSET = "Sunset",
  NIGHT = "Night",
  SUNRISE = "Sunrise",
}

export const lighting = writable(Lighting.DAY);

export function cycleLighting() {
  lighting.update((curr) => {
    switch (curr) {
      case Lighting.DAY:
        return Lighting.SUNSET;
      case Lighting.SUNSET:
        return Lighting.NIGHT;
      case Lighting.NIGHT:
        return Lighting.SUNRISE;
      default:
        return Lighting.DAY;
    }
  });
}
