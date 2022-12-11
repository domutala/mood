import MdNavbarContainer from "./MNavbarContainer.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MNavbarContainer: typeof MdNavbarContainer;
  }
}
