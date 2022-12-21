import type { PluginOption } from "vite";

import type { MoodPluginConfig } from "../type";
import routes from "./routes";
import icons from "./icons";
import path from "path";
import { existsSync, readFileSync } from "fs";

export type ModdVitePlugin = { [key: string]: (...param: any[]) => any };

export default function (): PluginOption {
  const pathConfig = path.resolve(process.cwd(), "mood.config");
  const is = existsSync(pathConfig);
  let configs: MoodPluginConfig = {};

  if (is) {
    const _c = readFileSync(
      path.resolve(process.cwd(), "mood.config"),
      "utf-8"
    );
    if (_c) configs = JSON.parse(_c);
  }

  return {
    name: "vite-plugin-mood",
    enforce: "pre",

    config(config) {
      config.define = config.define ?? {};
      config.define.MOOD_CONFIGS = configs;
    },

    buildStart(options) {
      if (icons.buildStart) icons.buildStart(configs, options);
    },

    transform(code, options) {
      if (routes.transform) {
        const _code = routes.transform(configs, code, options);
        if (_code) return _code;
      }
    },
  };
}
