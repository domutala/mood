<script lang="ts" setup>
import { onBeforeUnmount, onDeactivated, onMounted, ref } from "vue";
import $ from "jquery";

defineProps({
  url: { type: String },
  title: { type: String },
  subtitle: { type: String },
  itemWidth: { type: Number, default: 360 },
});

const isScrollable = ref(false);
const isInStart = ref(false);
const isInEnd = ref(false);
const scrollside = ref<HTMLDivElement>();
const isSpending = ref(false);
const isTouch = ref(false);

onMounted(mounted);
function mounted() {
  setTimeout(() => {
    if (scrollside.value) {
      scrollside.value.addEventListener("scroll", onScroll);
      setScrollable();
      onScroll();
      window.addEventListener("resize", setScrollable);

      scrollside.value.addEventListener("touchstart", (e) => onTouch(e));
      scrollside.value.addEventListener("touchend", (e) => onTouch(e));
    }
  }, 100);
}

function onTouch(e: TouchEvent) {
  isTouch.value = e.type === "touchstart";
  if (e.type === "touchend") readjust();
}

function scrollTo(to: -1 | 1) {
  if (!scrollside.value) return;

  const x = scrollside.value.offsetWidth;
  const left = scrollside.value.scrollLeft + to * x;
  $(scrollside.value).animate({ scrollLeft: left }, "slow");
}

function setScrollable() {
  if (!scrollside.value) return;
  isScrollable.value = false;

  if (scrollside.value.scrollWidth > scrollside.value.offsetWidth) {
    isScrollable.value = true;
  }

  readjust();
}

function onScroll() {
  if (!scrollside.value) return;

  const x =
    scrollside.value.scrollWidth -
    (scrollside.value.scrollLeft + scrollside.value.offsetWidth);

  isInEnd.value = x < 1;
  isInStart.value = scrollside.value.scrollLeft === 0;

  readjust();
}

function readjust() {
  if (!scrollside.value) return;
  if (isTouch.value) return;

  if (!isSpending.value) {
    const spen = scrollside.value.scrollLeft;
    setTimeout(() => {
      if (spen === scrollside.value?.scrollLeft) {
        isSpending.value = true;
        const children = $(scrollside.value)
          .children("div")
          .first()
          .children()
          .get();

        const oldScrollSideRect = scrollside.value.getBoundingClientRect();
        const lastChildRect =
          children[children.length - 1].getBoundingClientRect();

        if (oldScrollSideRect.right !== lastChildRect.right) {
          let gap = 0;
          for (const child of children) {
            if (spen !== scrollside.value.scrollLeft) {
              break;
            }

            const scrollSideRect = scrollside.value.getBoundingClientRect();
            const rect = child.getBoundingClientRect();
            if (
              rect.left < scrollSideRect.left &&
              rect.right > scrollSideRect.left
            ) {
              const s1 = rect.right - scrollSideRect.left;
              if (s1 < rect.width / 2) gap += rect.width;

              $(scrollside.value).animate({ scrollLeft: gap }, "fast");
              break;
            } else {
              gap += rect.width;
            }
          }
        }
        isSpending.value = false;
      }
    }, 50);
  }
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  window.removeEventListener("resize", setScrollable);
  scrollside.value?.removeEventListener("touchend", (e) => onTouch(e));
}
</script>
<template>
  <div class="m-listning-horizontal">
    <div class="m-listning-horizontal-nav" v-if="!isInStart">
      <button @click="scrollTo(-1)">
        <i class="fi fi-sr-angle-left"></i>
      </button>
    </div>

    <div class="m-listning-horizontal-carousel" ref="scrollside">
      <div>
        <slot />
      </div>
    </div>

    <div class="m-listning-horizontal-nav" v-if="!isInEnd">
      <button @click="scrollTo(1)">
        <i class="fi fi-sr-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-listning-horizontal {
  position: relative;

  .m-listning-horizontal-nav {
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:first-child {
      left: 0;
    }

    &:last-child {
      right: 0;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      padding: 0;
      cursor: pointer;
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border: 2px solid rgba(0, 0, 0, 0.288);

      i {
        display: flex;
        align-items: center;
      }
    }
  }

  .m-listning-horizontal-carousel {
    flex: 1;
    display: flex;
    overflow: auto;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
      width: 0;
      height: 0;
    }

    > div {
      display: flex;
      min-height: min-content;
    }
  }
}
</style>
