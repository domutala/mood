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
  <div class="m-main">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.m-main {
  height: 100%;
  width: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
