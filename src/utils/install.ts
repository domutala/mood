import type { App } from "vue";
import _ from "lodash";

export default (componentFiles: Record<string, unknown>) => {
  return (app: App) => {
    for (const path of Object.keys(componentFiles)) {
      const m: any = componentFiles[path];
      let name = path.split("/").pop() as string;
      name = name.replace(/\.\w+$/, "") as string;
      name = _.upperFirst(_.camelCase(name));
      name = name.charAt(0).toUpperCase() + name.slice(1);

      app.component(name, m.default);
    }
  };
};
