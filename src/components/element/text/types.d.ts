import MTextFormat from "./MTextFormat.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MTextFormat: typeof MTextFormat;
  }
}
