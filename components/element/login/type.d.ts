import type MLoginButtons from "./MLoginButtons.vue";
import type MLoginContainer from "./MLoginContainer.vue";
import type MLoginPopup from "./MLoginPopup.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MLoginButtons: typeof MLoginButtons;
    MLoginContainer: typeof MLoginContainer;
    MLoginPopup: typeof MLoginPopup;
  }
}
