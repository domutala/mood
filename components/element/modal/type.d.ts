import MModal from "./MModal.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MModal: typeof MModal;
  }
}
