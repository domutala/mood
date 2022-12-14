<script lang="ts" setup>
import { ref, computed, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import MModal from ".";

const props = defineProps({
  blur: { type: Boolean, default: false },
  extend: { type: Boolean, default: false },
  contentClass: { type: String, default: "" },
  closeOnBack: { type: Boolean, default: true },
  closeOnEsc: { type: Boolean, default: true },
  width: { type: [Number, String], default: 572 },
  bgColor: { type: String },
});

const emit = defineEmits<{ (event: "close"): void }>();

const content = ref<HTMLDivElement>();
const modal = ref<MModal>();

const cwidth = computed(() => {
  if (typeof props.width === "number") return `${props.width}px`;
  return props.width;
});

onMounted(mounted);
function mounted() {
  if (!content.value) return;
  modal.value = new MModal({
    el: content.value,
    closeOnBack: props.closeOnBack,
    closeOnEsc: props.closeOnEsc,
    close: () => emit("close"),
    bgColor: props.bgColor,
  });
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  modal.value?.destroy();
}
</script>

<template>
  <div
    ref="content"
    class="m-modal-modal"
    :class="[contentClass, { extend }]"
    :style="{ width: cwidth }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.m-modal-modal {
  max-width: 90%;
  max-height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background-color: var(--light);
  border-radius: 0.6em;
  overflow: auto;

  &.extend {
    max-width: unset;
    max-height: unset;
    width: 100% !important;
    height: 100% !important;
    box-shadow: none;
    border-radius: unset;
    background-color: unset;
  }
}
</style>
