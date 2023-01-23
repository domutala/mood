<script setup lang="ts">
import authServices from "@/services/auth";
import type { LoginMethod } from "@/mood/utils/Firebase";
import { ref } from "vue";

const emit = defineEmits<{ (event: "logged"): void }>();

const loading = ref<string>();
const methods = {
  google: { text: "Google", icon: "google" },
  github: { text: "Github", icon: "github" },
};

function login(method: LoginMethod) {
  loading.value = method;

  authServices
    .loginWithFirebaseToken(method)
    .then((user) => {
      if (user) emit("logged");
    })
    .finally(() => {
      loading.value = undefined;
    });
}
</script>

<template>
  <div class="m-login-buttons">
    <m-button
      v-for="(method, m) in methods"
      :key="m"
      border
      transparent
      @click="login(m)"
      flat
    >
      <m-icon :name="method.icon" class="icon" />
      <span>{{ $t(method.text) }}</span>
      <m-loading v-if="loading === m" class="logo" />
    </m-button>
  </div>
</template>

<style lang="scss" scoped>
.m-login-buttons {
  button {
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    margin-top: 5px;
    font-size: 12px;

    .icon {
      width: 28px;
      height: 28px;
    }

    .logo {
      width: 20px;
      height: 20px;
    }

    span {
      text-align: left;
    }
  }
}
</style>
