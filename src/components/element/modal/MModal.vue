<script setup lang="ts">
import { onBeforeUnmount, onDeactivated, onMounted, ref, type Ref } from "vue";

const props = defineProps({
  blur: { type: Boolean, default: false },
  closeOnBack: { type: Boolean, default: true },
  closeOnEsc: { type: Boolean, default: true },
});
const emit = defineEmits(["open", "close"]);

const el: Ref<HTMLDivElement | undefined> = ref();

onMounted(init);
function init() {
  if (!el.value) return;

  window.addEventListener("keydown", onEscPress);
  const body = document.body;

  if (body) {
    body.style.overflow = "hidden";
    body.appendChild(el.value);
    emit("open");
  }
}

function close() {
  emit("close");
}

function onBackClick() {
  if (props.closeOnBack) close();
}

function onEscPress(e: any) {
  if (e.keyCode === 27 && props.closeOnEsc) {
    const modals = document.querySelectorAll(".m-modal");
    if (modals[modals.length - 1] === el.value) close();
  }
}

function destroy() {
  const body = document.body;
  window.removeEventListener("keydown", onEscPress);

  const modals = document.querySelectorAll(".m-modal");

  if (body && modals.length <= 1) {
    body.style.overflowY = "scroll";
  }

  if (!el.value) return;

  if (body && el.value.parentNode === body) {
    body.removeChild(el.value);
  }
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
</script>

<template>
  <div ref="el" class="m-modal" :class="{ blur }">
    <div class="m-modal-back" @click="onBackClick"></div>
    <slot />
  </div>
</template>

<style lang="scss">
.m-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;

  .m-modal-back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // background-color: rgba(var(--black), 0.4);
    // backdrop-filter: saturate(180%) blur(15px);
    background-color: var(--m-dark-010-color);
  }

  > * {
    &:not(.m-modal-back) {
      max-width: 90%;
      max-height: 90%;
      position: relative;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
}
</style>
