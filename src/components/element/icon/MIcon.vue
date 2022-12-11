<template>
  <svg xmlns="http://www.w3.org/2000/svg" :style="{ width, height }">
    <use :href="`/mi/icons/micons.svg#${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: { required: true, type: String },
  width: { default: "18px", type: String },
  height: { default: "18px", type: String },
});
</script>

<style>
svg {
  width: inherit;
  height: inherit;
  fill: currentColor;
}
</style>
