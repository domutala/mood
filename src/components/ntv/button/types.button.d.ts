import type MButton from "./MButton.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MButton: typeof MButton;
  }
}
