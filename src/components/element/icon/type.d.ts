import MIcon from "./MIcon.vue";
import MLoading from "./MLoading.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MIcon: typeof MIcon;
    MLoading: typeof MLoading;
  }
}
