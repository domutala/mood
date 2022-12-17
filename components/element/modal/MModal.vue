<script lang="ts" setup>
import { ref, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import MModal from ".";

const props = defineProps({
  blur: { type: Boolean, default: false },
  extend: { type: Boolean, default: false },
  closeOnBack: { type: Boolean, default: true },
  closeOnEsc: { type: Boolean, default: true },
});

const emit = defineEmits<{ (event: "close"): void }>();

const content = ref<HTMLDivElement>();
const modal = ref<MModal>();

onMounted(mounted);
function mounted() {
  if (!content.value) return;
  modal.value = new MModal({
    el: content.value,
    closeOnBack: props.closeOnBack,
    closeOnEsc: props.closeOnEsc,
    close: () => emit("close"),
  });
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  modal.value?.destroy();
}
</script>

<template>
  <div ref="content" class="m-modal-modal" :class="{ extend }">
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

  &.extend {
    max-width: unset;
    max-height: unset;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
}
</style>
