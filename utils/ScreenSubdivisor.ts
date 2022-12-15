export class ScreenSubdivisor {
  _parent?: Element | null;
  x = 0;
  size = 0;
  length = 0;
  array: number[][] = [];
  cb!: (array: number[][]) => void;

  constructor(prt: Element | string, cb: (array: number[][]) => void) {
    if (typeof prt === "string") this._parent = document.querySelector(prt);
    else this._parent = prt;

    this.cb = cb;
  }

  callback() {
    if (!this.cb) return this.destroy();
    this.cb(this.array);
  }

  init(size: number, length: number) {
    if (!this._parent) return this.destroy();

    this.length = length;
    this.size = size;

    window.removeEventListener("resize", () => this.onResize());
    window.addEventListener("resize", () => this.onResize());
    this.calc();
  }

  calc() {
    if (!this._parent) return this.destroy();

    const w = this._parent.getBoundingClientRect().width;
    this.x = parseInt((w / this.size).toString());
    if (this.x === 0) this.x = 1;

    this.disturb();
  }

  disturb() {
    const array: number[][] = [];
    let index = 0;

    if (this.length === 0) return this.callback();

    while (index < this.length) {
      for (let i = 0; i < this.x; i++) {
        if (!array[i]) array[i] = [];
        array[i].push(i + index);
      }
      index += this.x;
    }

    this.array = array;
    this.callback();
  }

  onResize() {
    const w = window.innerWidth;
    setTimeout(() => {
      if (window.innerWidth === w) this.calc();
    }, 200);
  }

  destroy() {
    window.removeEventListener("resize", () => this.onResize());
  }
}

export default ScreenSubdivisor;
