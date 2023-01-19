import randomatic from "randomatic";

export class MModal {
  element!: HTMLElement;
  back?: HTMLElement;
  closeOnBack = false;
  closeOnEsc = false;
  attr!: string;
  close?: () => void;
  type!: "modal" | "popup";
  zIndex = 2500;
  bgColor?: string;

  isElementClicked = false;

  constructor({
    el,
    closeOnBack = false,
    closeOnEsc = false,
    close,
    type = "modal",
    zIndex = 2500,
    bgColor,
  }: {
    el: string | HTMLElement;
    closeOnBack?: boolean;
    closeOnEsc?: boolean;
    close?: () => void;
    type?: "modal" | "popup";
    zIndex?: number;
    bgColor?: string;
  }) {
    if (typeof el === "string") {
      this.element = document.querySelector(el) as HTMLElement;
    } else this.element = el;
    if (!this.element) return;

    this.closeOnEsc = closeOnEsc;
    this.closeOnBack = closeOnBack;
    this.close = close;
    this.type = type;
    this.zIndex = zIndex;
    this.bgColor = bgColor;

    this.setBack();
    if (this.closeOnEsc) {
      window.addEventListener("keydown", (e) => this.onEscPress(e));
    }

    window.addEventListener("close-last-modal", () => this.onIsModalOpen());

    window.addEventListener("close-last-modal", () => this.onIsModalOpen());

    while (!this.attr || document.querySelector(`[m-modal="${this.attr}"]`)) {
      this.attr = randomatic("0", 6);
    }

    this.element.setAttribute(`m-modal`, this.attr);
    this.element.style.zIndex = this.zIndex.toString();

    document.body.appendChild(this.element);
  }

  private setBack() {
    if (this.type === "modal") {
      this.back = document.createElement("div");
      this.back.classList.add("m-modal-back");
      this.back.style.position = "fixed";
      this.back.style.top = "0";
      this.back.style.left = "0";
      this.back.style.zIndex = `${this.zIndex - 0}`;
      this.back.style.backgroundColor = "#00000029";
      this.back.style.width = "100%";
      this.back.style.height = "100%";

      if (this.closeOnBack) {
        setTimeout(() => {
          this.back!.addEventListener("click", () => this.onWindowClick());
        }, 0);
      }

      document.body.appendChild(this.back);
    }

    if (this.closeOnBack) {
      setTimeout(() => {
        window.addEventListener("click", () => this.onWindowClick());
        this.element.addEventListener("click", () => this.onElementClick());
      }, 0);
    }
  }

  onElementClick() {
    this.isElementClicked = true;
    setTimeout(() => {
      this.isElementClicked = false;
    }, 20);
  }
  onWindowClick() {
    setTimeout(() => {
      if (!this.isElementClicked && this.close) this.close();
    }, 10);
  }

  onBackClick() {
    if (this.closeOnBack && this.close) this.close();
  }

  onEscPress(e: KeyboardEvent) {
    const element = document.querySelector(`[m-modal="${this.attr}"]`);
    if (!element) return;

    if (e.keyCode === 27 && this.closeOnEsc) {
      const modals = document.querySelectorAll("[m-modal]");
      if (modals[modals.length - 1] === element && this.close) this.close();
    }
  }

  onIsModalOpen() {
    const element = document.querySelector(`[m-modal="${this.attr}"]`);
    if (!element) return;

    const modals = document.querySelectorAll("[m-modal]");
    if (modals[modals.length - 1] === element && this.close) this.close();
  }

  destroy() {
    window.removeEventListener("click", () => this.onWindowClick());
    window.removeEventListener("keydown", (e) => this.onEscPress(e));
    window.removeEventListener("close-last-modal", () => this.onIsModalOpen());

    this.back?.remove();

    if (this.element) {
      this.element.removeEventListener("click", () => this.onElementClick());
      this.element.remove();
    }
  }
}

export default MModal;
