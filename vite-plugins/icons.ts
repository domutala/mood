import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  watch,
} from "node:fs";
import * as path from "node:path";
import type { ModdVitePlugin } from ".";
import type { MoodPluginConfig } from "../type";

const plugin: ModdVitePlugin = {
  buildStart(config: MoodPluginConfig) {
    buildIcon(config);
  },
};

function buildIcon(configs: MoodPluginConfig) {
  let PUBLIC_DIR = "public";
  let SRC_DIR = "assets/icons";

  try {
    if (configs.icons) {
      if (configs.icons.publicDir) PUBLIC_DIR = configs.icons.publicDir;
      if (configs.icons.src) configs.icons.src;
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}

  PUBLIC_DIR = path.resolve(process.cwd(), PUBLIC_DIR);
  SRC_DIR = path.resolve(process.cwd(), "src", SRC_DIR);

  if (!existsSync(SRC_DIR) || !existsSync(PUBLIC_DIR)) return;

  const DIR = path.resolve(process.cwd(), PUBLIC_DIR, `mi`);
  const DIR_ICON = path.resolve(DIR, "icons");

  if (!existsSync(DIR)) mkdirSync(DIR);
  if (!existsSync(DIR_ICON)) mkdirSync(DIR_ICON);

  toconvert(SRC_DIR, PUBLIC_DIR);
  watch(SRC_DIR, () => toconvert(SRC_DIR, PUBLIC_DIR));
}

function toconvert(SRC_DIR: string, PUBLIC_DIR: string) {
  const from = SRC_DIR;
  const dirs = readdirSync(`${from}`);
  const to = path.resolve(process.cwd(), `${PUBLIC_DIR}/mi/icons`);
  const icons = [];

  for (const dir of dirs) {
    if (dir.endsWith(".svg")) {
      const name = dir.replace(/.svg$/, "");
      const icon = readFileSync(`${from}/${dir}`, "utf-8");
      const svg = icon.match(/(<svg)(.*)(<\/svg>)/s)?.at(0);

      if (svg) {
        let _icon = svg;
        _icon = _icon.replace(/<svg([^>]*?)>/gm, `<symbol id="${name}">`);
        _icon = _icon.replace(/<\/svg>$/gm, "</symbol>");

        const viewBox = icon.match(/viewBox="([^"]*?)"/)?.at(0);
        if (viewBox) _icon = _icon.replace(/>/, ` ${viewBox}>`);
        icons.push(_icon);

        console.log("\x1b[33m%s\x1b[0m", `${name}.svg`, " is generate");
      }
    }
  }

  let symbol = `<svg xmlns="http://www.w3.org/2000/svg" display="none">`;
  symbol += icons.join("\n");
  symbol += `</svg>`;

  writeFileSync(path.resolve(to, `micons.svg`), symbol);
}

export default plugin;
