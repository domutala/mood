export * from ".";

import "./components";
import * as meta from "./meta";
import { functions } from "./functions";
import { Color } from "./styles";

export {};

declare let flutter_inappwebview: any;

declare global {
  const MOOD_CONFIGS: MoodPluginConfig;
  const flutter_inappwebview: any;
}

export type MoodPluginConfig = {
  routes?: { path?: string };
  icons?: { publicDir: string; src: string };
  components?: string[];
};

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $mood: {
      useMeta: typeof meta.useMeta;
      functions: typeof functions;
      mainComponent: () => HTMLElement;
      styles: Color;
    };
  }
}
