export * from ".";

import "./components";
import type meta from "./meta";

export {};

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $mood: {
      useMeta: meta;
      mainComponent: () => HTMLElement;
      styles: {
        screen: { xg: number; lg: number; md: number; sm: number };
      };
    };
  }
}
