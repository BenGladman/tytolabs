let counter = 0;

export class Cloud {
  readonly id = `cloud${counter++}`;

  private maxX: number;
  private x = 50000 - Math.random() * 100000;
  private y = -Math.random() * 100;
  private z = 1000;
  private width = Math.random() * 5000 + 2000;
  private height = this.width * (0.3 + 0.3 * Math.random());

  constructor(maxX: number, isInit = false) {
    this.maxX = maxX;
    if (isInit) {
      this.z = 400 + Math.random() * 300;
    } else {
      this.z = 1000;
    }
    this.x = ((0.5 - Math.random()) * this.maxX) / this.scale;
  }

  get svgProps() {
    return {
      cx: this.x,
      cy: this.y,
      rx: this.width,
      ry: this.height,
      opacity: this.opacity,
      transform: `scale(${this.scale})`,
    };
  }

  get scale() {
    return 100 / this.z;
  }

  get opacity() {
    if (this.z >= 700) {
      return Math.max(0, (1000 - this.z) / 300);
    }
    if (this.z <= 100) {
      return Math.max(0, this.z / 100);
    }
    return 1;
  }

  blow(dx: number, dz: number) {
    this.x += dx;
    this.z = Math.max(0, this.z - dz);
    return this;
  }

  get isOffscreen() {
    return (
      this.z <= 1 ||
      (this.x + this.width) * this.scale < -this.maxX ||
      (this.x - this.width) * this.scale > this.maxX
    );
  }
}
