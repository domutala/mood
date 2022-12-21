import _ from "lodash";
import type { App, Component } from "vue";

export default {
  install(app: App) {
    console.log();

    const layouts = import.meta.globEager<Record<string, any>>(
      "@/layouts/**/*.vue"
    );
    for (const layout of Object.keys(layouts)) {
      createCompoenent(layout, layouts[layout].default, "MLayout");
    }

    const folders: string[] = ["/", "ntv", "element"];

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

    function createCompoenent(
      name: string,
      component: Component,
      prefix?: string
    ) {
      name = name.split("/").pop() as string;
      name = name.replace(/\.\w+$/, "") as string;
      name = _.upperFirst(_.camelCase(name));
      name = name.charAt(0).toUpperCase() + name.slice(1);
      name = (prefix ?? "") + name;

      // console.log(name);

      // app.component(name, component);
    }
  },
};
