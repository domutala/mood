<script setup lang="ts">
import { computed, onMounted } from "vue";

const props = defineProps({
  primary: { default: true, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },

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
    :class="[
      classBuild,
      {
        square,
        border,
        flat,
        icon,
        lg,
      },
    ]"
    :type="props.type as 'button'"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
