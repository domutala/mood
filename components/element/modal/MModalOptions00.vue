<script lang="ts" setup>
import {
  onMounted,
  ref,
  onBeforeUnmount,
  onDeactivated,
  type PropType,
} from "vue";

const props = defineProps({
  link: { required: true, type: [String, HTMLElement] },
  alignment: {
    type: Object as PropType<{
      vertical: "bottom" | "top";
      horizontal: "left" | "right";
    }>,
  },
});
const emit = defineEmits<{ (event: "close"): void }>();
const mode = ref<"popup" | "bottom">("popup");
const button = ref<HTMLElement>();

onMounted(mounted);
async function mounted() {
  if (typeof props.link === "string") {
    button.value = document.querySelector(props.link) as HTMLElement;
  } else button.value = props.link;
  if (button.value) return;

  window.addEventListener("resize", onResize);
  onResize();
}

function onResize() {
  mode.value = window.innerWidth > 572 ? "popup" : "bottom";
}

function onClose() {
  emit("close");
}
onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  window.removeEventListener("resize", onResize);
}
</script>
<template>
  <m-modal-bottom v-if="mode === 'bottom'" :maxWidth="572" @close="onClose">
    <slot />
  </m-modal-bottom>
  <m-modal-popup v-else :link="button!" :alignment="alignment" @close="onClose">
    <slot />
  </m-modal-popup>
</template>
