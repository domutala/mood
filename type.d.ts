export * from ".";

import "./components";
import * as meta from "./meta";

export {};

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $mood: {
      useMeta: typeof meta.useMeta;
      mainComponent: () => HTMLElement;
      styles: {
        screen: { xg: number; lg: number; md: number; sm: number };
      };
    };
  }
}
