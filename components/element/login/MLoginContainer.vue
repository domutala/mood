<script setup lang="ts">
const emit = defineEmits<{ (e: "logged"): void }>();

function onLogged() {
  const event = new CustomEvent("x:notification-push", {
    detail: {
      component: "m-login-notification-after",
      props: {},
    },
  });
  window.dispatchEvent(event);

  emit("logged");
}
</script>

<template>
  <div class="m-login-container">
    <slot name="before" />
    <m-login-buttons class="actions" @logged="onLogged" />
    <slot name="after" />
  </div>
</template>

<style lang="scss" scoped>
.m-login-container {
  .actions {
    button {
      gap: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      margin-top: 5px;
      font-size: 12px;

      span {
        text-align: left;
      }
    }
  }
}
</style>
