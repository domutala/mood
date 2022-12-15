import type MLink from "./MLink.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MLink: typeof MLink;
  }
}
