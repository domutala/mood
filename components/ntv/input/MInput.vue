<script setup lang="ts">
import { ref, type Ref } from "vue";

const input: Ref<HTMLInputElement | undefined> = ref();
const isFocus = ref(false);

defineProps({
  modelValue: {},
  labelPlaceholder: { default: "", type: String },
  placeholder: { default: "", type: String },
  border: { default: true, type: Boolean },
  disabled: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  danger: { default: false, type: Boolean },
  type: { default: "text", type: String },
});

const emit = defineEmits<{ (e: "update:modelValue", value: any): void }>();

function onInput() {
  emit("update:modelValue", input.value?.value);
}

function focus() {
  if (!input.value) return;
  setTimeout(input.value?.focus, 10);
}

defineExpose({ focus });
</script>

<template>
  <div class="m-input">
    <div
      class="--container"
      :class="{
        border,
        disabled,
        success,
        danger,
        focus: isFocus,
      }"
    >
      <div class="--in">
        <slot name="before" />

        <div class="--content">
          <div
            class="--placeholder"
            :class="{
              '--topper': modelValue,
              '--to-textarea': type === 'textarea',
            }"
          >
            {{ labelPlaceholder }}
          </div>
          <input
            v-if="type !== 'textarea'"
            class="--input"
            ref="input"
            :value="modelValue"
            :type="type"
            :disabled="disabled"
            :placeholder="placeholder"
            v-bind="$attrs"
            @input="onInput"
            @focus="isFocus = true"
            @blur="isFocus = false"
          />
        </div>

        <slot name="after" />
      </div>

      <div v-if="type === 'textarea'" class="--textarea">
        <slot name="textarea" />
      </div>
    </div>
    <slot name="info" />
  </div>
</template>
