import { normalRandom } from "./normalRandom";

let counter = Math.ceil(Math.random() * 10000);

const PERSPECTIVE = 1000;
const FARTHEST = -5000;
const NEAREST = 950;
const ANIMATION_DURATION = 60;

interface Cloud {
  readonly id: number;
  readonly width: number;
  readonly height: number;
  readonly style: string;
  readonly offset: number;
}

export function createCloud(isInit = false): Cloud {
  const width = normalRandom({ mean: 1000, stdDev: 250 });
  const height = width * normalRandom({ mean: 0.3, stdDev: 0.1, min: 0.1 });
  const x = normalRandom({ stdDev: Math.min(window.innerWidth, 1000) });
  const y = normalRandom({ stdDev: 50 });
  const offset = isInit ? Math.random() * -ANIMATION_DURATION : 0;

  return {
    id: counter++,
    width,
    height,
    offset,
    style: [
      "--perspective:",
      PERSPECTIVE,
      "px;",
      "--farthest:",
      FARTHEST,
      "px;",
      "--nearest:",
      NEAREST,
      "px;",
      "--duration:",
      ANIMATION_DURATION,
      "s;",
      "--offset:",
      offset,
      "s;",
      "--x:",
      x,
      "px;",
      "--y:",
      y,
      "px",
    ].join(""),
  };
}
