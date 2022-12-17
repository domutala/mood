<script lang="ts" setup>
import $ from "jquery";
import { watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
watch(
  () => router.currentRoute,
  () => $("html, body").animate({ scrollTop: 0 }, "fast"),
  { deep: true }
);
</script>
<template>
  <router-view />
</template>

<style lang="scss" scoped></style>
