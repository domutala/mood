import type { App } from "vue";

import meta from "./meta";
import components from "./components";

export { default as utils } from "./utils";
export { default as MoodVitePlugin } from "./vite";
export * from "./meta";

export const Mood = {
  install(app: App) {
    app.config.globalProperties.$mood = {};

    app.use(meta);
    app.use(components);
  },
};

export default Mood;
