import type { App } from "vue";

import meta from "./meta";
import components from "./components";

export { default as utils } from "./utils";
export * from "./meta";

export { default as MoodVitePlugin } from "./vite-plugin";

export const Mood = {
  install(app: App) {
    app.config.globalProperties.$mood = {} as any;
    app.use(meta);
    app.use(components);
  },
};

export default Mood;
