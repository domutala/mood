<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, onDeactivated } from "vue";
import MModal from ".";
import $ from "jquery";

defineProps({
  maxWidth: { default: 572 },
  classPopup: { default: "", type: String },
});
const emit = defineEmits<{ (event: "close"): void }>();

const root = ref<HTMLDivElement>();
const content = ref<HTMLDivElement>();
const top = ref<HTMLElement>();
const bottom = ref<HTMLElement>();

const waite = ref(false);
const isTouch = ref(false);
const modal = ref<MModal>();

onMounted(mounted);
async function mounted() {
  if (!root.value) return;
  if (!content.value) return;
  if (!top.value) return;
  if (!bottom.value) return;

  modal.value = new MModal({
    el: root.value,
    closeOnBack: true,
    closeOnEsc: true,
    type: "modal",
    close: () => close(),
  });

  const topHeight = top.value.getBoundingClientRect().height;
  content.value.scrollTo({ top: topHeight, behavior: "smooth" });
  content.value.addEventListener("scroll", onScroll);

  content.value.addEventListener("touchstart", (e) => onTouch(e));
  content.value.addEventListener("touchend", (e) => onTouch(e));
  content.value.addEventListener("touchend", (e) => onTouch(e));
  content.value.addEventListener("mouseup", (e) => onTouch(e));
}

function onTouch(e: TouchEvent | MouseEvent) {
  if (waite.value) return;

  isTouch.value = ["touchstart", "mousedown"].includes(e.type);
  if (!isTouch.value) onScroll();
}

function onScroll() {
  if (!content.value) return;

  const oldScrollTop = content.value.scrollTop;
  const limit = content.value.getBoundingClientRect().height / 2;

  setTimeout(() => {
    if (!content.value) return;

    const newScrollTop = content.value.scrollTop;
    if (newScrollTop === oldScrollTop && !isTouch.value) {
      const topHeight = top.value!.getBoundingClientRect().height;

      if (limit > content.value!.scrollTop) {
        waite.value = true;
        content.value!.scrollTo({ top: 0, behavior: "smooth" });

        close(() => {
          waite.value = false;
          content.value?.scrollTo({ top: topHeight });
        });
      } else {
        content.value?.scrollTo({ top: topHeight, behavior: "smooth" });
      }
    }
  }, 200);
}

function close(onClose?: () => void) {
  if (!content.value) return;
  $(content.value).animate({ scrollTop: 0, opacity: 0.5 }, "slow", () => {
    emit("close");
    if (onClose) onClose();
  });
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  modal.value?.destroy();

  if (!content.value) return;
  content.value.removeEventListener("scroll", onScroll);

  content.value.removeEventListener("touchstart", (e) => onTouch(e));
  content.value.removeEventListener("touchend", (e) => onTouch(e));
  content.value.removeEventListener("touchend", (e) => onTouch(e));
  content.value.removeEventListener("mouseup", (e) => onTouch(e));
}
</script>
<template>
  <div class="m-modal-bottom" ref="root" :style="{ maxWidth: `${maxWidth}px` }">
    <div ref="content" class="content">
      <div ref="top" class="top" @click="() => close()"></div>
      <div ref="bottom" class="bottom" :class="classPopup">
        <slot />
      </div>
    </div>
    <div class="front" v-if="waite"></div>
  </div>
</template>

<style scoped lang="scss">
.m-modal-bottom {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);

  > .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar {
      width: 0;
    }

    .top {
      background-color: rgba(0, 128, 0, 0.00000001);
      height: 100%;
    }

    .bottom {
      box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
      background-color: var(--light);
      max-height: calc(100% - 100px);
      overflow: auto;
      border-top-right-radius: 0.6em;
      border-top-left-radius: 0.6em;
    }
  }

  > .front {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 4, 142, 0.0000000001);
    z-index: 3000;
  }
}
</style>
