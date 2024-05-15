<script setup>
import { inject } from "vue";
import { RouterLink } from "vue-router";

const { useUser } = inject("store");

const userStore = useUser();
</script>

<template>
  <div>
    <h1>Home page</h1>
    <RouterLink :to="{ name: 'catalog' }">Catalog</RouterLink>
    {{ userStore.isAuth ? "auth" : "guest" }}
  </div>
</template>

<style scoped></style>
