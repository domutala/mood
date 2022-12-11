<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    required: true,
    type: String,
    validator: (v: string) => ["first", "last", "middle"].includes(v),
  },
  hideVerticalAlign: { default: false, type: Boolean },
  hideVerticalAllAlign: { default: false, type: Boolean },
  hideVerticalSplitAlign: { default: false, type: Boolean },
  hideHorizontalAlign: { default: false, type: Boolean },
});

const type = computed(() => props.type);
</script>

<template>
  <div
    class="m-navbar__container"
    :class="[
      type,
      {
        'hide-vertical-align': hideVerticalAlign,
        'hide-vertical-all-align': hideVerticalAllAlign,
        'hide-vertical-split-align': hideVerticalSplitAlign,
        'hide-horizontal-align': hideHorizontalAlign,
      },
    ]"
  >
    <slot />
  </div>
</template>
