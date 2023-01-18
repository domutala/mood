import _ from "lodash";
import type { App } from "vue";

export default {
  install(app: App) {
    const folders: string[] = ["/", "ntv", "element"];

    window.addEventListener("is-modal-open", () => {
      const modals = document.querySelectorAll("[m-modal]");
      if (modals.length) {
        window.dispatchEvent(new CustomEvent("close-last-modal"));
      } else {
        if (!(window as any).flutter_inappwebview) return;
        flutter_inappwebview.callHandler("go-back", true);
      }
    });

    for (let i = 0; i < folders.length; i++) {
      let fold = folders[i];
      if (fold.startsWith("/")) fold = fold.slice(1);
      if (fold.endsWith("/")) fold = fold.slice(-1);

      folders[i] = fold;
    }

    const componentFiles = import.meta.globEager("./**/*.vue");

    for (const path of Object.keys(componentFiles)) {
      const splits = path.slice(2).split("/").slice(0, -1);
      let is = false;

      for (let i = 0; i < splits.length; i++) {
        let root = splits.slice(0, i).join("/");
        if (root === "") root = "/";

        is = folders.includes(root);
        if (is) break;
      }

      if (is) {
        const m: any = componentFiles[path];
        let name = path.split("/").pop() as string;
        name = name.replace(/\.\w+$/, "") as string;
        name = _.upperFirst(_.camelCase(name));
        name = name.charAt(0).toUpperCase() + name.slice(1);

        app.component(name, m.default);
      }
    }
  },
};
