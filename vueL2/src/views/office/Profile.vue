<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
const { logout } = inject('api').auth;

const router = useRouter();
const userStore = inject('store').useUser();

async function tryLogout() {
  await logout();

  userStore.setUser(null);
  router.push({ name: 'auth.login' })
}
</script>

<template>
  <div class="container">
    <h1>Страница Office Profile</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <button class="btn btn-primary" @click="tryLogout">Logout</button>
  </div>
</template>

<style scoped></style>
