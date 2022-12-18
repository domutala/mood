<script lang="ts" setup>
import { ref, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import {
  computePosition,
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

  // autoUpdate(parent.value, content.value, setPosition);
  setPosition();
  window.addEventListener("resize", setPosition);
  window.addEventListener("resize", setPosition);
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
  const gapLeft = parentRect.left;
  const gapRight = window.innerWidth - parentRect.right;
  const gapBottom = window.innerHeight - parentRect.top;
  const gapTop = window.innerHeight - parentRect.bottom;
  let alignment: Alignment | undefined;

  // if (props.start) {
  //   alignment = "start";

  //   if (props.direction === "vertical") {
  //     if (gapLeft >= contentRect.width) alignment = "start";
  //     else if (gapRight >= contentRect.width) alignment = "end";
  //   } else if (props.direction === "horizontal") {
  //     if (gapBottom >= contentRect.width) alignment = "start";
  //     else if (gapTop >= contentRect.width) alignment = "end";
  //   }
  // }

  let placement: Placement | undefined;
  if (props.start) {
    if (props.direction === "vertical") {
      console.log(gapLeft, contentRect.width);

      placement = "bottom-start";
      if (gapLeft >= contentRect.width) placement = "bottom-start";
      else if (gapRight >= contentRect.width) placement = "bottom-end";
    } else if (props.direction === "horizontal") {
      placement = "top-start";
      if (gapTop >= contentRect.width) placement = "top-end";
    }
  }

  console.log(placement);

  const config: ComputePositionConfig = {
    placement,
    middleware: [
      // autoPlacement({  allowedPlacements }),
      offset(props.offset),
    ],
  };

  // const g = 50 + props.offset;
  // content.value.style.maxWidth = `${window.innerWidth - g}px`;
  // content.value.style.maxHeight = `${window.innerHeight - g}px`;

  const aa = await computePosition(parent.value, content.value, config);

  if (!parent.value) return;
  if (!content.value) return;

  content.value.style.left = `${aa.x}px`;
  content.value.style.top = `${aa.y}px`;

  // if (aa.placement.startsWith("bottom") || aa.placement.startsWith("top")) {
  //   if (aa.placement.endsWith("start")) {
  //     content.value.style.maxWidth = `${gapLeft - g}px`;
  //   } else if (aa.placement.endsWith("end")) {
  //     content.value.style.maxWidth = `${gapRight - g}px`;
  //   }

  //   if (aa.placement.startsWith("bottom")) {
  //     content.value.style.maxHeight = `${gapBottom - g}px`;
  //   } else if (aa.placement.startsWith("top")) {
  //     content.value.style.maxHeight = `${gapTop - g}px`;
  //   }
  // }

  // else if (
  //   aa.placement.startsWith("left") ||
  //   aa.placement.startsWith("right")
  // ) {
  //   if (aa.placement.endsWith("start")) {
  //     content.value.style.maxHeight = `${gapBottom - g}px`;
  //   } else if (aa.placement.endsWith("end")) {
  //     content.value.style.maxHeight = `${gapTop - g}px`;
  //   }

  //   if (aa.placement.startsWith("left")) {
  //     content.value.style.maxWidth = `${gapBottom - g}px`;
  //   } else if (aa.placement.startsWith("top")) {
  //     content.value.style.maxWidth = `${gapTop - g}px`;
  //   }
  // }
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
