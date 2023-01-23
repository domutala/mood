<script setup lang="ts">
import { onBeforeUnmount, onDeactivated, onMounted, ref } from "vue";

const emit = defineEmits<{ (e: "logged"): void; (e: "close"): void }>();
const open = ref(false);
const response = ref<string>();

function onLogged() {
  emit("logged");
  if (response.value) {
    const event = new Event(response.value);
    window.dispatchEvent(event);
  }

  response.value = undefined;
  open.value = false;
}

function onPopupClose() {
  if (!response.value) return;
  if (response.value) {
    const event = new Event(`${response.value}:canceled`);
    window.dispatchEvent(event);
  }

  open.value = false;
  response.value = undefined;
}

function opener(e: any) {
  response.value = e.detail.response;
  if (response.value) open.value = true;
}

onMounted(mounted);
function mounted() {
  window.addEventListener("m:open-popup-loggger", opener);
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  window.removeEventListener("m:open-popup-loggger", opener);
}
</script>

<template>
  <m-modal v-if="open" @close="onPopupClose" class="m-logger-popup">
    <m-login-container @logged="onLogged">
      <template v-slot:before>
        <slot name="before" />
      </template>
      <template v-slot:after>
        <slot name="after" />
      </template>
    </m-login-container>
  </m-modal>
</template>

<style lang="scss">
.m-logger-popup {
  > * {
    border-radius: inherit !important;
  }
}
</style>
