import MPopup from "./MPopup.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MPopup: typeof MPopup;
  }
}
