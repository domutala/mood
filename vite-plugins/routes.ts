import { lstatSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { ModdVitePlugin } from ".";
import type { MoodPluginConfig } from "../type";
import { resolve as pathResolve } from "path";

const plugin: ModdVitePlugin = {
  transform(config: MoodPluginConfig, code: string, id: string) {
    const $1 = path.resolve(process.cwd(), "src/main.ts").replace(/\\/g, "/");
    if (id === $1) {
      const fromPath = config.routes?.path ?? "pages";
      const routes = generator(fromPath).join(", \n");
      code =
        `import { createRouter, createWebHistory} from "vue-router";` + code;

      const _code =
        `const routes = [${routes}];` +
        "const router = createRouter({ routes, history: createWebHistory() });" +
        "app.use(router);";

      code = code.replace("/** insert routes */", _code);
      return code;
    }
  },
};

function generator(main: string) {
  const dirs = readdirSync(path.resolve(process.cwd(), `src/${main}`));
  const strs: string[] = [];

  for (const dir of dirs) {
    const path = `/${main}/${dir}`
      .replace(/_/g, ":")
      .replace(/^\/pages/, "")
      .replace(/.vue$/, "")
      .replace(/P/, "")
      .toLocaleLowerCase()
      .replace(/\/index$/g, "");

    const name = path
      .replace(/:/g, "")
      .replace(/\//g, "-")
      .replace(/^-/, "")
      .replace(/-$/, "");

    if (dir.endsWith(".vue")) {
      // if (dir.split("/").pop() !== "PIndex.vue") {
      if (!dir.startsWith("-")) {
        const str = buildRoute(name, path, dir);
        strs.push(str);
        // }
      }
    } else if (
      lstatSync(
        pathResolve(process.cwd(), "src", `${main}/${dir}`)
      ).isDirectory()
    ) {
      let str = buildRoute(name, path, `${dir}/PIndex.vue`);

      if (name === "xiru") {
        str = addRow({
          obj: str,
          key: "redirect",
          value: "{ name: 'xiru-home' }",
          stringify: false,
        });
      }

      const children = generator(`${main}/${dir}`);
      let childs = "";
      for (const st of children) childs += `${st},`;

      str = addRow({
        obj: str,
        key: "children",
        value: `[${childs}]`,
        stringify: false,
      });

      strs.push(str);
    }
  }

  function buildRoute(name: string, path: string, dir: string) {
    if (path === "") path = "/";

    const oPath = pathResolve(process.cwd(), "src", `${main}/${dir}`);

    const re = /(\/\**) (mood)(.*)(\*\/)$/ms;
    const content = readFileSync(oPath, "utf-8");
    const mParams = content.match(re)?.at(0);

    let str = addRow({ obj: "{}", key: "name", value: name || "index" });

    if (mParams) {
      const params = mParams.match(/(param:)(.*)/gm);
      const p = params?.map((param) => `:${param.split(":")[1]}`);
      if (p) path += `/${p.join("/")}`;
    }

    str = addRow({ obj: str, key: "path", value: path });

    str = addRow({
      obj: str,
      key: "component",
      value: `() => import("./${main}/${dir}")`,
      stringify: false,
    });

    return str;
  }

  function addRow({
    obj,
    key,
    value,
    stringify = true,
  }: {
    obj: string;
    key: string;
    value: string;
    stringify?: boolean;
  }) {
    if (stringify) value = `"${value}"`;

    obj = obj.slice(0, -1);
    obj += `${key}: ${value},}`;

    return obj;
  }

  return strs;
}

export default plugin;
