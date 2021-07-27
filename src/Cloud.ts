let counter = Math.ceil(Math.random() * 10000);

const PERSPECTIVE = 1000;
const FARTHEST = -1000;
const FAR = -100;
const NEAR = 800;
const NEAREST = 950;
const X_RANGE = 1000;
const Y_RANGE = 100;

export class Cloud {
  readonly id = counter++;

  private x: number;
  private y: number;
  private z: number;
  private width = Math.random() * 800 + 200;
  private height = this.width * (0.3 + 0.3 * Math.random());

  constructor(isInit = false) {
    if (isInit) {
      this.z = NEAR - Math.random() * (NEAR - FAR);
    } else {
      this.z = FARTHEST;
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
    return `opacity: ${this.opacity}; transform: perspective(${PERSPECTIVE}px) translate3d(${this.x}px,${this.y}px,${this.z}px);`;
  }

  get opacity() {
    if (this.z < FAR) {
      return Math.max(0, (FARTHEST - this.z) / (FARTHEST - FAR));
    }
    if (this.z > NEAR) {
      return Math.max(0, (NEAREST - this.z) / (NEAREST - NEAR));
    }
    return 1;
  }

  blow(dx: number, dz: number) {
    this.x += dx;
    this.z += dz;
    return this;
  }

  get isOffscreen() {
    return this.z > NEAREST || this.z < FARTHEST;
  }
}
