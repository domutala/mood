import "./element/type";
import "./ntv/type";

import type meta from "../meta";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $mood: {
      useMeta: meta;
    };
  }
}
