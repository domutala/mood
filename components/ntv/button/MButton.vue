<script setup lang="ts">
import { computed, onMounted } from "vue";

const props = defineProps({
  primary: { default: true, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },
  light: { default: false, type: Boolean },

  flat: { default: false, type: Boolean },
  transparent: { default: false, type: Boolean },

  lg: { default: false, type: Boolean },

  square: { default: false, type: Boolean },
  icon: { default: false, type: Boolean },
  border: { default: false, type: Boolean },
  disabled: { default: false, type: Boolean },
  type: { default: "button", type: String },
});

const typeColor = computed(() => {
  return props.dark
    ? "dark"
    : props.light
    ? "light"
    : props.danger
    ? "danger"
    : props.info
    ? "info"
    : props.success
    ? "success"
    : "primary";
});

const classBuild = computed(() => {
  let ext = props.transparent ? "transparent" : props.flat ? "flat" : "";
  if (ext) ext = `-${ext}`;

  return `${typeColor.value}${ext}`;
});

onMounted(() => {});
</script>

<template>
  <button
    class="m-button"
    :class="[typeColor, { square, border, flat, icon, lg, transparent }]"
    :type="props.type as 'button'"
    :disabled="disabled"
  >
    <slot />

    <div class="m-button-background"></div>
    <div class="m-button-border"></div>
    <div class="m-button-splash"></div>
  </button>
</template>
