<script lang="ts" setup>
import {
  ref,
  onMounted,
  onDeactivated,
  onBeforeUnmount,
  type PropType,
} from "vue";
import MModal from ".";

const props = defineProps({
  link: { required: true, type: [String, HTMLElement] },
  offset: { default: 7 },
  alignment: {
    type: Object as PropType<{
      vertical: "bottom" | "top";
      horizontal: "left" | "right";
    }>,
  },
});

const emit = defineEmits<{ (event: "close"): void }>();

const parent = ref<HTMLElement>();
const content = ref<HTMLDivElement>();
const modal = ref<MModal>();

const vertAlignment = ref<"bottom" | "top">("bottom");
const horizAlignment = ref<"left" | "right">("right");

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

  setPosition();
}

async function setPosition() {
  if (!content.value) return;
  if (!parent.value) return;

  const parentRect = parent.value.getBoundingClientRect();

  if (parentRect.top < 0 || parentRect.bottom > window.innerHeight) {
    emit("close");
    return;
  }

  const exBottom = window.innerHeight - parentRect.bottom;
  const exTop = parentRect.top;
  vertAlignment.value = props.alignment?.vertical
    ? props.alignment?.vertical
    : exBottom > 410
    ? "bottom"
    : exBottom > exTop
    ? "bottom"
    : "top";

  const exLeft = parentRect.right;
  const exRight = window.innerWidth - parentRect.left;
  horizAlignment.value = props.alignment?.horizontal
    ? props.alignment?.horizontal
    : exRight > 350
    ? "right"
    : exRight > exLeft
    ? "right"
    : "left";

  alignOnBottom();
  alignOnTop();
  alignOnRight();
  alignOnLeft();

  setTimeout(setPosition, 50);
}

function alignOnBottom() {
  if (vertAlignment.value !== "bottom") return;
  if (!parent.value) return;
  if (!content.value) return;

  const parentRect = parent.value.getBoundingClientRect();
  content.value.style.top = `${parentRect.bottom + props.offset}px`;
  content.value.style.bottom = `${10 + props.offset}px`;
  content.value.style.alignItems = "unset";
}

function alignOnTop() {
  if (vertAlignment.value !== "top") return;
  if (!parent.value) return;
  if (!content.value) return;

  const parentRect = parent.value.getBoundingClientRect();
  content.value.style.bottom = `${
    window.innerHeight - (parentRect.top - props.offset)
  }px`;
  content.value.style.top = `${10 + props.offset}px`;
  content.value.style.alignItems = "flex-end";
}

function alignOnRight() {
  if (horizAlignment.value !== "right") return;
  if (!parent.value) return;
  if (!content.value) return;

  const parentRect = parent.value.getBoundingClientRect();
  content.value.style.left = `${parentRect.left}px`;
  content.value.style.right = `${10 + props.offset}px`;
  content.value.style.justifyContent = "unset";
}

function alignOnLeft() {
  if (horizAlignment.value !== "left") return;
  if (!parent.value) return;
  if (!content.value) return;

  const parentRect = parent.value.getBoundingClientRect();
  content.value.style.right = `${window.innerWidth - parentRect.right}px`;
  content.value.style.left = `${10 + props.offset}px`;
  content.value.style.justifyContent = "flex-end";
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  modal.value?.destroy();
}
</script>

<template>
  <div ref="content" class="m-modal-popup" style="position: absolute">
    <div class="m-modal-popup--content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-modal-popup {
  pointer-events: none;
  display: flex;

  .m-modal-popup--content {
    pointer-events: auto;
    overflow: auto;
    width: max-content;
    height: max-content;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.3em;
    background-color: var(--m-light);
    box-shadow: var(
      --ds-shadow-overlay,
      0 4px 8px -2px rgba(9, 30, 66, 0.25),
      0 0 1px rgba(9, 30, 66, 0.31)
    );
  }
}
</style>
