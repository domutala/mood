import MPaginationDots from "./MPaginationDots.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MPaginationDots: typeof MPaginationDots;
  }
}
