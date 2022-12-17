<script lang="ts" setup>
import { ref, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import {
  computePosition,
  autoPlacement,
  autoUpdate,
  offset,
  type Alignment,
  type Placement,
  type ComputePositionConfig,
} from "@floating-ui/dom";
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

  autoUpdate(parent.value, content.value, setPosition);
}

async function setPosition() {
  if (!parent.value) return;
  if (!content.value) return;

  let allowedPlacements: Placement[] =
    props.direction === "vertical"
      ? ["top-start", "top-end", "bottom-start", "bottom-end"]
      : props.direction === "horizontal"
      ? ["right-start", "right-end", "left-start", "left-end"]
      : [];

  const parentRect = parent.value.getBoundingClientRect();
  const contentRect = content.value.getBoundingClientRect();

  const gapLeft = window.innerWidth - parentRect.left;
  const gapRight = window.innerWidth - parentRect.right;

  const gapBottom = window.innerHeight - parentRect.top;
  const gapTop = window.innerHeight - parentRect.bottom;

  let alignment: Alignment | undefined;

  if (props.start) {
    if (props.direction === "vertical") {
      if (gapLeft >= contentRect.width) alignment = "start";
      else if (gapRight >= contentRect.width) alignment = "end";
      else alignment = "start";
    } else if (props.direction === "horizontal") {
      if (gapBottom >= contentRect.width) alignment = "start";
      else if (gapTop >= contentRect.width) alignment = "end";
      else alignment = "start";
    }
  }

  const config: ComputePositionConfig = {
    middleware: [
      autoPlacement({ alignment, allowedPlacements }),
      offset(props.offset),
    ],
  };

  const g = 50 + props.offset;
  content.value.style.maxWidth = `${window.innerWidth - g}px`;
  content.value.style.maxHeight = `${window.innerHeight - g}px`;

  const aa = await computePosition(parent.value, content.value, config);

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
  display: flex;
  flex-direction: column;
  background-color: var(--m-light);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.3em;
}
</style>
