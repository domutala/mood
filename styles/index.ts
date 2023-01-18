import type { App } from "vue";

export class Color {
  screen = { xg: 1272, lg: 992, md: 772, sm: 572 };

  tohex(rgb: number[]) {
    const r = (155).toString(16) + rgb[0];
    const g = (155).toString(16) + rgb[1];
    const b = (155).toString(16) + rgb[2];

    return `#${r}${g}${b}`;
  }

  ntv(ntv: string) {
    const style = getComputedStyle(document.documentElement);
    return style
      .getPropertyValue(`--m-ntv-${ntv}`)
      .split(",")
      .map((c) => parseInt(c));
  }

  get colors() {
    const colors = {
      primary: this.ntv("primary"),
      secondary: this.ntv("secondary"),
      dark: this.ntv("dark"),
      light: this.ntv("light"),
      success: this.ntv("success"),
      danger: this.ntv("danger"),
    };
    return colors;
  }
}
const styles = new Color();

export const Plugin = {
  install(app: App) {
    app.config.globalProperties.$mood.styles = styles;
  },
};

export default styles;
