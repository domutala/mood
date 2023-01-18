<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, onDeactivated } from "vue";
import MModal from ".";
import $ from "jquery";

defineProps({ maxWidth: { default: 572 } });
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
  $(content.value).animate({ scrollTop: topHeight }, "fast");

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
  if (!bottom.value) return;
  if (!top.value) return;

  const oldScrollTop = content.value.scrollTop;

  setTimeout(() => {
    const newScrollTop = content.value!.scrollTop;
    if (newScrollTop !== oldScrollTop || isTouch.value) return;

    const bottomRect = bottom.value!.getBoundingClientRect();
    const topHeight = top.value!.getBoundingClientRect().height;

    const x = bottomRect.bottom - window.innerHeight;
    if (x > bottomRect.height / 3) {
      waite.value = true;
      content.value!.scrollTo({ top: 0, behavior: "smooth" });

      close(() => {
        waite.value = false;
        content.value?.scrollTo({ top: topHeight });
      });
    } else {
      content.value!.scrollTo({ top: topHeight, behavior: "smooth" });
    }
  }, 200);

  // setTimeout(() => {
  //   if (!content.value) return;

  //   const newScrollTop = content.value.scrollTop;
  //   if (newScrollTop === oldScrollTop && !isTouch.value) {
  //     const topHeight = top.value!.getBoundingClientRect().height;

  //     if (limit > content.value!.scrollTop) {
  //       waite.value = true;
  //       content.value!.scrollTo({ top: 0, behavior: "smooth" });

  //       close(() => {
  //         waite.value = false;
  //         content.value?.scrollTo({ top: topHeight });
  //       });
  //     } else {
  //       content.value?.scrollTo({ top: topHeight, behavior: "smooth" });
  //     }
  //   }
  // }, 200);
}

function close(onClose?: () => void) {
  if (!content.value) return;
  $(content.value).animate({ scrollTop: 0, opacity: 0.5 }, "fast", () => {
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
      <div ref="bottom" class="bottom">
        <div>
          <slot />
        </div>
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
  background-color: var(--m-dark-090);

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
      height: 100%;
    }

    .bottom {
      max-height: calc(100% - 100px);
      overflow: hidden;
      border-top-right-radius: 0.6em;
      border-top-left-radius: 0.6em;
      display: flex;
      align-items: flex-end;
      pointer-events: none;

      > div {
        pointer-events: auto;
        overflow: auto;
        box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
        width: 100%;
        max-height: 100%;
        background-color: var(--light);
      }
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
