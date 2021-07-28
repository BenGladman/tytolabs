let counter = Math.ceil(Math.random() * 10000);

const PERSPECTIVE = 1000;
const FARTHEST = -5000;
const NEAREST = 950;
const X_RANGE = window.innerWidth * 3.5;
const Y_RANGE = 300;
const ANIMATION_DURATION = 30;

export class Cloud {
  readonly id = counter++;

  private x: number;
  private y: number;
  private offset: number;
  private width = Math.random() * 1500 + 200;
  private height = this.width * (0.3 + 0.3 * Math.random());

  constructor(isInit = false) {
    if (isInit) {
      this.offset = Math.random() * -ANIMATION_DURATION;
    } else {
      this.offset = 0;
    }
    this.y = (0.5 - Math.random()) * Y_RANGE;
    this.x = (0.5 - Math.random()) * X_RANGE;
  }

  get ellipseProps() {
    return {
      cx: 0,
      cy: 0,
      rx: this.width,
      ry: this.height,
    };
  }

  get svgStyleProp() {
    return [
      "--perspective:",
      PERSPECTIVE,
      "px; --farthest:",
      FARTHEST,
      "px; --nearest:",
      NEAREST,
      "px; --duration:",
      ANIMATION_DURATION,
      "s; --offset:",
      this.offset,
      "s; --x:",
      this.x,
      "px; --y:",
      this.y,
      "px",
    ].join("");
  }
}
