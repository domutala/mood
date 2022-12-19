import type { App } from "vue";
import meta from "./meta";
import components from "./components";
import { Plugin as StylePlugin } from "./styles";

export * from "./meta";
export { default as utils } from "./utils";
export { default as init } from "./init";
export { default as styles } from "./styles";

export function getMainComponent(): HTMLElement {
  return document.querySelector("body")!;
}

export const Mood = {
  install(app: App) {
    app.config.globalProperties.$mood = {} as any;
    app.config.globalProperties.$mood.mainComponent = getMainComponent;

    app.use(meta);
    app.use(components);
    app.use(StylePlugin);

    document.querySelector("body")?.classList.add("m-main");
  },
};

export default Mood;
