<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, onDeactivated } from "vue";

defineProps({
  link: { required: true, type: [String, HTMLElement] },
  popupAlignement: { type: String },
  popupDirection: { type: String },
});
const emit = defineEmits<{ (event: "close"): void }>();
const mode = ref<"popup" | "bottom">("popup");

onMounted(mounted);
async function mounted() {
  window.addEventListener("resize", onResize);
  onResize();
}

function onResize() {
  mode.value = window.innerWidth > 572 ? "popup" : "bottom";
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
function destroy() {
  window.removeEventListener("resize", onResize);
}
</script>
<template>
  <m-modal-bottom
    v-if="mode === 'bottom'"
    :maxWidth="572"
    @close="emit('close')"
  >
    <div style="padding: 15px">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Repellat ipsam molestias
      provident mollitia, modi molestiae autem earum quam quasi quaerat ad
      aliquid quia praesentium quisquam? Itaque nam atque perspiciatis! Optio.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsam
      molestias provident mollitia, modi molestiae autem earum quam quasi
      quaerat ad aliquid quia praesentium quisquam? Itaque nam atque
      perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Repellat ipsam molestias provident mollitia, modi molestiae autem
      earum quam quasi quaerat ad aliquid quia praesentium quisquam? Itaque nam
      atque perspiciatis! Optio. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repellat ipsam molestias provident mollitia, modi
      molestiae autem earum quam quasi quaerat ad aliquid quia praesentium
      quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Repellat ipsam molestias provident
      mollitia, modi molestiae autem earum quam quasi quaerat ad aliquid quia
      praesentium quisquam? Itaque nam atque perspiciatis! Optio. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Blanditiis tempora fugiat cum
      eligendi dicta eos nemo illo officiis sit laboriosam assumenda quos,
      asperiores facere illum nisi fugit placeat exercitationem sapiente? Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem
      delectus perferendis, nam suscipit rem! Reprehenderit eum esse enim
      aspernatur, illo quam reiciendis aliquam obcaecati voluptates modi eaque,
      iusto repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Obcaecati quidem delectus perferendis, nam suscipit rem!
      Reprehenderit eum esse enim aspernatur, illo quam reiciendis aliquam
      obcaecati voluptates modi eaque, iusto repudiandae! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Obcaecati quidem delectus perferendis,
      nam suscipit rem! Reprehenderit eum esse enim aspernatur, illo quam
      reiciendis aliquam obcaecati voluptates modi eaque, iusto repudiandae!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem
      delectus perferendis, nam suscipit rem! Reprehenderit eum esse enim
      aspernatur, illo quam reiciendis aliquam obcaecati voluptates modi eaque,
      iusto repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Obcaecati quidem delectus perferendis, nam suscipit rem!
      Reprehenderit eum esse enim aspernatur, illo quam reiciendis aliquam
      obcaecati voluptates modi eaque, iusto repudiandae!
    </div>
  </m-modal-bottom>
  <m-modal-popup
    v-else
    :alignement="popupAlignement"
    :direction="popupDirection"
    :link="link"
    @close="emit('close')"
  >
    <div style="max-width: 300px">
      <div style="padding: 20px">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Assumenda hic
        corporis ipsam, ratione ducimus cupiditate earum tempore doloribus iure
        neque a? Commodi minus debitis, quam itaque ea ab quis mollitia. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt
        corrupti! Architecto voluptatem reprehenderit dicta velit fugiat. Non,
        soluta cum magnam quaerat impedit quibusdam, qui eligendi quasi
        veritatis aspernatur accusamus. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Vel cumque fuga quisquam ex provident voluptatum
        voluptas deleniti rerum reprehenderit accusamus? Voluptatibus
        repudiandae quasi tempora, adipisci enim asperiores dolore maiores qui.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel cumque
        fuga quisquam ex provident voluptatum voluptas deleniti rerum
        reprehenderit accusamus? Voluptatibus repudiandae quasi tempora,
        adipisci enim asperiores dolore maiores qui. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Vel cumque fuga quisquam ex provident
        voluptatum voluptas deleniti rerum reprehenderit accusamus? Voluptatibus
        repudiandae quasi tempora, adipisci enim asperiores dolore maiores qui.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel cumque
        fuga quisquam ex provident voluptatum voluptas deleniti rerum
        reprehenderit accusamus? Voluptatibus repudiandae quasi tempora,
        adipisci enim asperiores dolore maiores qui.
      </div>
    </div>
  </m-modal-popup>
</template>
