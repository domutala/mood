<script setup lang="ts">
const props = defineProps({
  backgoundColor: {
    default: "var(--m-popup-tooltip-background-color)",
    type: String,
  },
  textColor: { default: "var(--m-popup-tooltip-text-color)", type: String },
  radius: { default: ".9em", type: String },
  padding: { default: "10px", type: String },
  maxWidth: { default: "250px", type: String },
});
</script>

<template>
  <div
    class="m-popup-tooltip"
    :style="{
      color: props.textColor,
      borderRadius: props.radius,
      padding: props.padding,
      backgroundColor: props.backgoundColor,
      maxWidth: props.maxWidth,
    }"
  >
    <slot />
  </div>
</template>
