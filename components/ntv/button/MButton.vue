<script setup lang="ts">
import { computed, onMounted, type PropType } from "vue";

const props = defineProps({
  primary: { default: true, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },
  light: { default: false, type: Boolean },

  flat: { default: false, type: Boolean },
  transparent: { default: false, type: Boolean },
  block: { default: false, type: Boolean },
  textAlign: {
    default: "center",
    type: String as PropType<"left" | "right" | "center">,
  },

  lg: { default: false, type: Boolean },
  sm: { default: false, type: Boolean },

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

onMounted(() => {});
</script>

<template>
  <button
    class="m-button"
    :class="[
      typeColor,
      `text-align-${textAlign}`,
      { square, border, flat, icon, lg, sm, transparent, block },
    ]"
    :type="props.type as 'button'"
    :disabled="disabled"
  >
    <slot />

    <div class="m-button-background"></div>
    <div class="m-button-border"></div>
    <div class="m-button-splash"></div>
  </button>
</template>
