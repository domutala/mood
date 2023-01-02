<script lang="ts" setup>
import {
  onMounted,
  ref,
  onBeforeUnmount,
  onDeactivated,
  type PropType,
} from "vue";

defineProps({
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

function onResize() {
  mode.value = window.innerWidth > 572 ? "popup" : "bottom";
}

function onClose() {
  open.value = false;
  emit("close");
}
onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  window.removeEventListener("resize", onResize);
}
</script>
<template>
  <div ref="button" @click.prevent="open = !open">
    <slot name="button" />
  </div>
  <m-modal-bottom
    v-if="mode === 'bottom' && ready && open"
    :maxWidth="572"
    @close="onClose"
  >
    <slot />
  </m-modal-bottom>
  <m-modal-popup2
    v-else-if="ready && open"
    :link="button!"
    :alignment="alignment"
    @close="onClose"
  >
    <slot />
  </m-modal-popup2>
</template>
