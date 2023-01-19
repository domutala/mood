<script lang="ts" setup>
import { ref, onMounted } from "vue";
import statusbar from "../../../functions/statusbar";

const height = ref(0);
onMounted(mounted);
async function mounted() {
  height.value = await statusbar();
}
</script>

<template>
  <div class="m-statusbar" :style="{ height: `${height}px` }"></div>
</template>
