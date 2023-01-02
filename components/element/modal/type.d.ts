import MModal from "./MModal.vue";
import MModalBottom from "./MModalBottom.vue";
import MModalPopup from "./MModalPopup.vue";
import MModalPopup2 from "./MModalPopup2.vue";
import MModalOptions from "./MModalOptions.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MModal: typeof MModal;
    MModalBottom: typeof MModalBottom;
    MModalPopup: typeof MModalPopup;
    MModalPopup2: typeof MModalPopup2;
    MModalOptions: typeof MModalOptions;
  }
}
