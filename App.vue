<script lang="ts" setup>
import $ from "jquery";
import _ from "lodash";
import { ref, watch, onMounted, defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const children = ref<{ [key: string]: any }>({});
watch(
  () => router.currentRoute,
  () => $("html, body").animate({ scrollTop: 0 }, "fast"),
  { deep: true }
);

onMounted(mounted);
function mounted() {
  const layouts = import.meta.globEager<Record<string, any>>(
    "@/layouts/**/*.vue"
  );

  for (const layout of Object.keys(layouts)) {
    createCompoenent(layout, layouts[layout].default);
  }
}

function createCompoenent(name: string, component: any) {
  name = name.split("/").pop() as string;
  name = name.replace(/\.\w+$/, "") as string;
  name = _.lowerCase(_.camelCase(name));
  children.value[name] = defineComponent(component);
}

const layout = computed(() => children.value.default ?? "router-view");
</script>
<template>
  <m-login-popup />
  <component :is="layout" />
</template>
