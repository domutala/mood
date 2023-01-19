import type { App } from "vue";
import statusbar from "./statusbar";
import navigationbar from "./navigationbar";

export const functions = {
  statusbar,
  navigationbar,
};

export default {
  install(app: App) {
    app.config.globalProperties.$mood.functions = functions;
  },
};
