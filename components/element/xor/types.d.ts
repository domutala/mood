import MXorStatusbar from "./MXorStatusbar.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MXorStatusbar: typeof MXorStatusbar;
  }
}
