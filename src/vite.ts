import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import type { PluginOption } from "vite";
import path from "node:path";
import { watch } from "node:fs";

export default function (): PluginOption {
  return {
    name: "vite-plugin-gen",
    enforce: "pre",

    buildStart() {
      buildIcon();
    },
  };
}

function buildIcon() {
  let config: { [key: string]: any } = {};
  let PUBLIC_DIR = "public";
  let SRC_DIR = path.relative(process.cwd(), "src/assets/icons");

  try {
    const pathToConfig = path.join(process.cwd(), "micons.config.json");
    config = JSON.parse(readFileSync(pathToConfig, "utf-8"));

    if (config.icons) {
      if (config.publicDir) PUBLIC_DIR = config.publicDir;
      if (config.icons?.src) {
        SRC_DIR = path.relative(process.cwd(), config.icons.src);
      }
    }

    // eslint-disable-next-line no-empty
  } catch (error) {}

  if (existsSync(SRC_DIR)) {
    const DIR = path.resolve(process.cwd(), PUBLIC_DIR, `mi`);
    const DIR_ICON = path.resolve(DIR, "icons");

    if (!existsSync(DIR)) mkdirSync(DIR);
    if (!existsSync(DIR_ICON)) mkdirSync(DIR_ICON);

    toconvert(config);
    watch(SRC_DIR, () => toconvert());
  }
}

function toconvert(config: { [key: string]: any } = {}) {
  let from = path.join(process.cwd(), "src/assets/icons");

  const PUBLIC_DIR = config.publicDir || "public";
  if (config.icons?.src) from = path.join(process.cwd(), config.icons.src);

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
