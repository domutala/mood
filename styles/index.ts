import type { App } from "vue";

export const Plugin = {
  install(app: App) {
    app.config.globalProperties.$mood.styles = {
      screen: { xg: 1272, lg: 992, md: 772, sm: 572 },
    };
  },
};

export default Plugin;
