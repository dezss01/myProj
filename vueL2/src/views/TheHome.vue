<script setup>
import { inject } from "vue";
import { RouterLink } from "vue-router";

const { useUser, useCounter } = inject('store');

const userStore = useUser();
const counterStore = useCounter();
</script>

<template>
  <div>
    <h1>Home page</h1>
    <RouterLink :to="{ name: 'catalog ' }">Catalog</RouterLink>
    {{ userStore.isAuth ? 'auth' : 'guest' }}
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
  </div>
</template>

<style scoped></style>
