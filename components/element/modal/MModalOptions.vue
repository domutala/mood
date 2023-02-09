<script lang="ts" setup>
import {
  onMounted,
  ref,
  onBeforeUnmount,
  onDeactivated,
  type PropType,
  watch,
} from "vue";

defineProps({
  modalWidth: { type: [Number, String], default: 572 },
  classPopup: { default: "", type: String },
  popupComponent: {
    default: "popup",
    type: String as PropType<"modal" | "popup">,
  },
  alignment: {
    type: Object as PropType<{
      vertical: "bottom" | "top";
      horizontal: "left" | "right";
    }>,
  },
});
const emit = defineEmits<{ (event: "close" | "open"): void }>();
const mode = ref<"popup" | "bottom">("popup");
const button = ref<HTMLElement>();
const ready = ref(false);
const open = ref(false);

onMounted(mounted);
async function mounted() {
  window.addEventListener("resize", onResize);
  onResize();

  setTimeout(() => {
    ready.value = true;
  }, 200);
}

watch(
  () => open.value,
  () => emit(open.value ? "open" : "close")
);
function onResize() {
  mode.value = window.innerWidth > 572 ? "popup" : "bottom";
}

function onClose() {
  open.value = false;
  emit("close");
}

function onOpen() {
  open.value = true;
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  window.removeEventListener("resize", onResize);
}

defineExpose({ onClose, onOpen });
</script>
<template>
  <span ref="button" @click.prevent="open = !open">
    <slot name="button" />
  </span>
  <m-modal-bottom
    v-if="mode === 'bottom' && ready && open"
    :maxWidth="572"
    :classPopup="classPopup"
    @close="onClose"
  >
    <slot />
  </m-modal-bottom>
  <component
    v-else-if="ready && open"
    :is="popupComponent === 'modal' ? 'm-modal' : 'm-modal-popup'"
    :link="button!"
    :alignment="alignment"
    :classPopup="classPopup"
    :width="modalWidth"
    @close="onClose"
  >
    <slot />
  </component>
</template>
