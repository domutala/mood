import MdNavbar from "./MNavbar.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MNavbar: typeof MdNavbar;
  }
}
