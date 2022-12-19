import type { App } from "vue";

const styles = {
  screen: { xg: 1272, lg: 992, md: 772, sm: 572 },
};

export const Plugin = {
  install(app: App) {
    app.config.globalProperties.$mood.styles = styles;
  },
};

export default styles;
