import type { App } from "vue";
import meta from "./meta";
import components from "./components";
import styles from "./styles";

export { default as utils } from "./utils";
export { default as init } from "./init";
export * from "./meta";

export function getMainComponent(): HTMLElement {
  return document.querySelector(".m-main")!;
}

export const Mood = {
  install(app: App) {
    app.config.globalProperties.$mood = {} as any;

    app.config.globalProperties.$mood.mainComponent = getMainComponent;

    app.use(meta);
    app.use(components);
    app.use(styles);
  },
};

export default Mood;
