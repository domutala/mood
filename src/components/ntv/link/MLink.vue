<script setup lang="ts"></script>

<template>
  <a class="m-link" v-bind="$attrs">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.m-link {
  text-decoration: none;
  color: var(--m-primary);

  &:hover {
    text-decoration: underline;
  }
}
</style>
