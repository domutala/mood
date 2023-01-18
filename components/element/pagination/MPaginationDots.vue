<script lang="ts" setup>
import { watch, ref, onMounted } from "vue";
import { type PaginationResult, paginate } from ".";

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  length: { type: Number, default: 0 },
});
defineEmits<{ (e: "update:modelValue", value: any): void }>();
const result = ref<PaginationResult>();

onMounted(onValue);
watch(() => props.modelValue, onValue);
function onValue() {
  result.value = paginate(props.length, props.modelValue, 1, 5);
}
</script>
<template>
  <div class="m-pagination-dots" v-if="result">
    <transition-group enter-active-class="in" leave-active-class="out">
      <div
        class="dots animate__animated"
        v-for="index in result.pages"
        :key="index"
        :class="{ current: result.currentPage === index }"
      ></div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
.m-pagination-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .dots {
    margin: 0 2.5px;
    width: 10px;
    height: 10px;
    border-radius: 16em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    background-color: var(--m-light);
    opacity: 0.7;
    transition: all 0.5s ease;
    animation-timing-function: ease;
    animation-duration: 0.5s;
    transform-origin: center;

    &.current {
      opacity: 1;
      width: 22px;
      height: 12px;
    }

    &.in {
      animation-name: animateIn;
    }
    &.out {
      animation-name: animateOut;
    }

    @keyframes animateIn {
      from {
        width: 10px;
        height: 10px;
      }

      to {
        width: 0;
        height: 0;
      }
    }
    @keyframes animateOut {
      to {
        width: 10px;
        height: 10px;
      }

      from {
        width: 0;
        height: 0;
      }
    }
  }
}
</style>
