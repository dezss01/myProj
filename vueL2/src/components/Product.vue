<script setup>
import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import ProductControls from "./products/ProductControls.vue";
import ProductReviews from "./../components/products/Reviews.vue";
import E404 from "./errors/E404.vue";

const productsStore = inject('store').useProducts();

const strId = computed(() => useRoute().params.id);
const id = computed(() => +strId.value);
const product = computed(() =>
  /^[1-9]+\d*$/.test(strId.value) ? productsStore.getProduct(id.value) : undefined
);
</script>

<template>
  <div v-if="product" class="container">
    <h1>{{ product.title }}</h1>
    <ProductControls :id="product.id" class="mb-3" />
    <div class="link-info">
      <RouterLink :to="{ name: 'catalog' }" class="btn btn-info">Back to list</RouterLink>
    </div>
    <Suspense>
      <ProductReviews :id="product.id" />
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
  <E404 v-else />
</template>
