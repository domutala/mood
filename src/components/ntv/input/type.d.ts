import type MInput from "./MInput.vue";
import type MInputInfo from "./MInputInfo.vue";
import type MInputRange from "./MInputRange.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MInput: typeof MInput;
    MInputInfo: typeof MInputInfo;
    MInputRange: typeof MInputRange;
  }
}
