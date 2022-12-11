<script setup lang="ts">
const props = defineProps({
  maxWidth: { default: "350px", type: String },
});
</script>

<template>
  <div class="m-popup-popin" :style="{ maxWidth: props.maxWidth }">
    <slot />
  </div>
</template>
