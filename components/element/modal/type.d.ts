import MModal from "./MModal.vue";
import MPopup from "./MPopup.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MModal: typeof MModal;
    MPopup: typeof MPopup;
  }
}
