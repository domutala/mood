<script setup lang="ts">
import { onBeforeUnmount, onDeactivated, onMounted, ref, watch } from "vue";
import { createPopper, type Instance } from "@popperjs/core";

import $ from "jquery";
import { generateMarker } from "@/utils/uString";

const props = defineProps({
  atach: { required: true, type: String },
  role: { required: true, type: String },
  placement: { default: "auto", type: String },
});

const isOpen = ref(false);
const isShow = ref(false);
const mark = ref("");

let $popper: Instance;
let $atach!: HTMLElement;

function el() {
  return document.querySelector(`[m-popup="${mark.value}"]`) as HTMLElement;
}

onMounted(() => {
  mark.value = generateMarker("popup");
  init();
});

function init() {
  if (props.atach) {
    $atach = document.querySelector(props.atach) as HTMLElement;

    setTimeout(() => {
      if ($atach) {
        if (props.role === "popup") $atach.addEventListener("click", open);
        else $atach.addEventListener("mouseenter", open);
      }
    }, 1000);
  }
}

function open() {
  if (isOpen.value) return;
  isOpen.value = true;
  isShow.value = false;

  setTimeout(() => {
    const $el = el();

    // supprimer l'évènement sur l'élément d'atach
    if (props.role === "popup") $atach.removeEventListener("click", open);
    else $atach.addEventListener("mouseenter", open);

    // ajouter le main element dans le body
    const main = $el.querySelector("#m-popup__main") as HTMLElement;
    if (main) document.body.appendChild(main);

    createPoper();

    // ajouter un évènement sur body
    if (props.role === "popup")
      window.addEventListener("click", onWindowAction);
    else window.addEventListener("mousemove", onWindowAction);
    isShow.value = true;
  }, 100);
}

function close() {
  isShow.value = false;

  // supprimer l'évènement sur body
  window.removeEventListener("click", onWindowAction);
  window.removeEventListener("mousemove", onWindowAction);

  // recréer l'évènement sur l'élément d'atach
  if (props.role === "popup") $atach.addEventListener("click", open);
  else $atach.addEventListener("mouseenter", open);

  setTimeout(() => {
    if ($popper) $popper.destroy();

    const main = document.querySelector(
      `[m-popup-main="${mark.value}"]`
    ) as HTMLElement;

    // remettre le main element dans le composant
    const $el = el();
    if (main.parentElement == document.body) $el.appendChild(main);
    isOpen.value = false;
  }, 100);
}

function createPoper() {
  const popup = document.querySelector(
    `[m-popup-popup="${mark.value}"]`
  ) as HTMLElement;

  $popper = createPopper($atach, popup, {
    placement: props.placement as "auto",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 5],
        },
      },
    ],
  });
}

function onWindowAction(e: any) {
  setTimeout(() => {
    if (e.type === "mousemove") {
      const t1 = $(`${props.atach}:hover`).length === 0;
      let t2 = true;

      if (props.role !== "tooltip") {
        t2 = $(`[m-popup-popup="${mark.value}"]:hover`).length === 0;
      }

      if (t1 && t2) close();
    } else if ($(`[m-popup-popup="${mark.value}"]:hover`).length === 0) close();
  }, 200);
}

function destroy() {
  if ($popper) $popper.destroy();

  if ($atach) {
    $atach.removeEventListener("click", open);
    $atach.removeEventListener("mouseenter", open);
  }

  window.removeEventListener("click", onWindowAction);
  window.removeEventListener("mousemove", onWindowAction);

  // supprimer l'élément main s'il éxiste'
  const main = document.querySelector(`[m-popup-main="${mark.value}"]`);
  main?.remove();
}

watch(
  () => props.atach,
  () => {
    window.removeEventListener("click", onWindowAction);
    window.removeEventListener("mousemove", onWindowAction);

    if ($atach) {
      $atach.removeEventListener("click", open);
      $atach.removeEventListener("mouseenter", open);
    }

    init();
  }
);

onBeforeUnmount(destroy);
onDeactivated(destroy);
</script>

<template>
  <div
    id="el"
    :m-popup="mark"
    :style="{
      opacity: isShow ? 1 : 0,
      position: 'absolute',
      cursor: 'default',
    }"
  >
    <div :m-popup-main="mark" id="m-popup__main">
      <div v-if="isShow && props.role === 'popup'" class="back"></div>
      <div v-if="isOpen" :m-popup-popup="mark" class="m-popup" role="tooltip">
        <slot />
      </div>
    </div>
  </div>
</template>
