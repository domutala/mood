<script setup lang="ts">
import { generateMarker } from "@mood/utils/uString";
import { onBeforeUnmount, onDeactivated, onMounted, ref } from "vue";

const props = defineProps({
  fixAlign: {
    type: String,
    validator: (v: string) =>
      v ? ["m-navbar-horizontal", "vertical"].includes(v) : true,
  },
  verticalSplitAt: { default: 992, type: Number },
  horizontalAt: { default: 500, type: Number },
  withBorder: { default: true, type: Boolean },
});

const emit = defineEmits([
  "m-navbar-vertical",
  "m-navbar-horizontal",
  "m-navbar-vertical-split",
  "m-navbar-align",
]);

const mark = ref("");
const vertical = ref(true);
const split = ref(true);

onMounted(() => {
  mark.value = generateMarker("navbar");
  window.addEventListener("resize", onResize);

  setTimeout(() => {
    const el = document.querySelector(`[m-navbar="${mark.value}"]`);
    document.body.appendChild(el!);

    const e = vertical.value ? "m-navbar-vertical" : "m-navbar-horizontal";
    emitGlobal(e, vertical.value);
    emitGlobal("m-navbar-align", e);

    emitGlobal("m-navbar-vertical-split", split.value);

    onResize();
  }, 100);
});

const emitGlobal = (e: string, detail?: any) => {
  const event = new CustomEvent(e, { detail });
  document.dispatchEvent(event);

  emit(e as any, detail);
};

const onResize = () => {
  /** ne pas exécuter si l'alignement est fixé */
  if (!props.fixAlign) {
    const oldVertical = vertical.value;
    vertical.value = window.innerWidth > props.horizontalAt;

    if (oldVertical !== vertical.value) {
      const e = vertical.value ? "m-navbar-vertical" : "m-navbar-horizontal";
      emitGlobal(e, vertical.value);
      emitGlobal("m-navbar-align", e);
    }
  }

  /** exécuter seulement en alignement vertical */
  if (vertical.value) {
    const oldSplit = split.value;
    split.value = window.innerWidth < props.verticalSplitAt;

    if (oldSplit !== split.value) {
      emitGlobal("m-navbar-vertical-split", split.value);
    }
  }
};

function destroy() {
  const el = document.querySelector(`[m-navbar="${mark.value}"]`);
  if (el && el.parentNode) el.parentNode.removeChild(el);

  window.removeEventListener("resize", onResize);
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
</script>

<template>
  <div
    :m-navbar="mark"
    class="m-navbar"
    :class="[
      {
        vertical,
        split,
        'with-border': withBorder,
      },
    ]"
  >
    <slot />
  </div>
</template>
