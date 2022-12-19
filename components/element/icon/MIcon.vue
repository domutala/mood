<template>
  <svg xmlns="http://www.w3.org/2000/svg" :style="{ width, height }">
    <use :href="`/mi/icons/micons.svg#${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: { required: true, type: String },
  width: { type: String },
  height: { type: String },
});
</script>

<style>
svg {
  fill: currentColor;
}
</style>
