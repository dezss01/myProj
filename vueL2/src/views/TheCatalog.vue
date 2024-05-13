<script setup>
import ProductControls from "./../components/products/ProductControls.vue";
import { inject } from "vue";
import { RouterLink } from 'vue-router';
const { useShop, useUser, useProducts } = inject('store');

const shopStore = useShop();
const userStore = useUser();
const productsStore = useProducts();
</script>

<template>
  <div class="container">
    <h1>Страница каталога</h1>
    <div>
      <h1>Стоимость товаров в корзине: {{ shopStore.total }}руб.</h1>
      <h1>Всего денег: {{ userStore.userMoney }}руб.</h1>
    </div>
    <div class="row">
      <div class="col-auto mb-3" v-for="item in productsStore.products">
        <h3>{{ item.title }}</h3>
        <p>Item title: {{ item.price }}</p>
        <p>Rest in store: {{ item.rest }}</p>
        <RouterLink :to="{ name: 'product', params: { id: item.id } }">
          Full information
        </RouterLink>
        <ProductControls :id="item.id" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
