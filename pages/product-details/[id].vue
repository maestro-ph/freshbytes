<template>
  <div v-if="product">
      <!-- breadcrumb start -->
      <product-details-breadcrumb :product="product" />
      <!-- breadcrumb end -->

      <!-- product details area start -->
      <product-details-area :product="product" />
      <!-- product details area end -->

      <!-- related products start -->
      <product-related :product-id="product.id" :category="product.parentCategory" />
      <!-- related products end -->
  </div>
</template>

<script setup lang="ts">
import product_data from '@/data/product-data';
import { useProductStore } from '@/pinia/useProductStore';
import { type IProduct } from '@/types/product-d-t';
const route = useRoute()

const productStore = useProductStore();

let product = ref<IProduct | undefined>();
useSeoMeta({ title: "Product Details Page" });
onMounted(() => {
  product.value = product_data.find(b => b.id === Number(route.params.id));
  if (product.value && product.value?.images?.length > 0) {
    productStore.activeImg = product.value.images[0];
  }
});

// <script setup lang="ts">
// import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
// import { useRuntimeConfig } from 'nuxt/app';
// import { type IProduct } from '@/types/product-d-t';
// import { useProductStore } from '@/pinia/useProductStore';

// definePageMeta({
//   title: "Product Details Page"
// });

// const route = useRoute();
// const config = useRuntimeConfig();
// const api = config.public.API_LINK;

// const productStore = useProductStore();
// let product = ref<IProduct | undefined>(undefined);

// onMounted(async () => {
//   const res = await fetch(`${api}/products/${route.params.id}`);
//   if (res.ok) {
//     product.value = await res.json();
//     if (product.value && product.value?.images?.length > 0) {
//       productStore.activeImg = product.value.images[0];
//     }
//   }
// }); 

</script>
