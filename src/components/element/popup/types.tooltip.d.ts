import type MPopupTooltip from "./MPopupTooltip.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MPopupTooltip: typeof MPopupTooltip;
  }
}
