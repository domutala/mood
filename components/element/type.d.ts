import "./navbar/type";
import "./popup/type";
import "./text/types";
import "./modal/type";

import MListingHorizontal from "./MListingHorizontal.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MListingHorizontal: typeof MListingHorizontal;
  }
}
