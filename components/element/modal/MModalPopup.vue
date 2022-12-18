<script lang="ts" setup>
import { ref, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import {
  computePosition,
  offset,
  type ComputePositionConfig,
} from "@floating-ui/dom";
import { createPopper } from "@popperjs/core";
import MModal from ".";

const props = defineProps({
  link: { required: true, type: [String, HTMLElement] },
  offset: { default: 7 },
  start: { default: false, type: Boolean },
  direction: {
    type: String,
    validator: (v: string) => ["horizontal", "vertical"].includes(v),
  },
});

const emit = defineEmits<{ (event: "close"): void }>();

const parent = ref<HTMLElement>();
const content = ref<HTMLDivElement>();
const modal = ref<MModal>();

onMounted(mounted);
async function mounted() {
  if (!content.value) return;

  if (typeof props.link === "string") {
    parent.value = document.querySelector(props.link) as HTMLElement;
  } else parent.value = props.link;
  if (!parent.value) return;

  modal.value = new MModal({
    el: content.value,
    closeOnBack: true,
    closeOnEsc: true,
    type: "popup",
    close: () => emit("close"),
  });

  const g = 50 + props.offset;
  content.value.style.maxWidth = `${window.innerWidth - g}px`;
  content.value.style.maxHeight = `${window.innerHeight - g}px`;

  const popper = createPopper(parent.value, content.value, {
    modifiers: [],
  });
  // popper.forceUpdate();
  // autoUpdate(parent.value, content.value, setPosition);
  // setPosition();
  // window.addEventListener("resize", setPosition);
  // window.addEventListener("resize", setPosition);
}

async function setPosition() {
  if (!parent.value) return;
  if (!content.value) return;

  const config: ComputePositionConfig = {
    middleware: [offset(props.offset)],
  };

  const aa = await computePosition(parent.value, content.value, config);

  if (!parent.value) return;
  if (!content.value) return;

  content.value.style.left = `${aa.x}px`;
  content.value.style.top = `${aa.y}px`;
}
onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  modal.value?.destroy();
}
</script>

<template>
  <div ref="content" class="m-modal-popup" style="position: absolute">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.m-modal-popup {
  overflow: auto;
  background-color: var(--m-light);
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
  //   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.3em;

  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
}
</style>
