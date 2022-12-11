export * from ".";

import "./components";
import type meta from "./meta";

export {};

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $mood: {
      useMeta: meta;
    };
  }
}
