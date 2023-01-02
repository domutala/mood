import MModal from "./MModal.vue";
import MModalBottom from "./MModalBottom.vue";
import MModalPopup from "./MModalPopup.vue";
import MModalOptions from "./MModalOptions.vue";
import MModalOptions00 from "./MModalOptions00.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MModal: typeof MModal;
    MModalBottom: typeof MModalBottom;
    MModalPopup: typeof MModalPopup;
    MModalOptions: typeof MModalOptions;
    MModalOptions00: typeof MModalOptions00;
  }
}
