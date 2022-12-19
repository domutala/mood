import MListingHorizontal from "./MListingHorizontal.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MListingHorizontal: typeof MListingHorizontal;
  }
}
