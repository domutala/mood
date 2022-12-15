<script setup lang="ts">
import { textFormatPost } from "@mood/utils/uString";

defineProps({
  text: { default: "true", type: String },
});
</script>

<template>
  <div class="m-text-format" v-html="textFormatPost(text)"></div>
</template>

<style lang="scss">
:root {
  --m-text-accent-color: var(--m-primary);
}

.m-text-format {
  .__cit,
  .__hashtag {
    color: var(--m-text-accent-color);
  }
}
</style>
