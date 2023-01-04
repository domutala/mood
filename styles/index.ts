import type { App } from "vue";
import { getMainComponent } from "..";

const styles = {
  screen: { xg: 1272, lg: 992, md: 772, sm: 572 },
};

export const Plugin = {
  install(app: App) {
    app.config.globalProperties.$mood.styles = styles;
  },
};

export function getScreenSize() {
  const rect = getMainComponent().getBoundingClientRect();
  const xsizes = Object.keys(styles.screen);

  if (rect.width >= styles.screen.xg) xsizes.push("xg");
  if (rect.width >= styles.screen.lg) xsizes.push("lg");
  if (rect.width >= styles.screen.md) xsizes.push("md");
  if (rect.width >= styles.screen.sm) xsizes.push("sm");

  const xsize =
    rect.width > styles.screen.lg
      ? "xg"
      : rect.width > styles.screen.md
      ? "lg"
      : rect.width > styles.screen.sm
      ? "md"
      : "sm";

  return { ...rect, xsize, xsizes };
}

export default styles;
