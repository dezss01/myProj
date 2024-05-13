<script setup>
import { inject } from "vue";
import { RouterView, RouterLink } from 'vue-router'
const { useShop, useUser } = inject('store');

const shopStore = useShop();
const userStore = useUser();
</script>

<template>
  <nav>
    <div class="container">
      <!-- <div>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </div>
      <div>
        <RouterLink :to="{ name: 'catalog' }">Catalog</RouterLink>
      </div>
      <div>
        <RouterLink :to="{ name: 'office.profile' }">Office</RouterLink>
      </div>
      <div>
        <RouterLink :to="{ name: 'auth.login' }">Auth Login</RouterLink>
      </div> -->
      <!-- <div>
        <strong>Текущий путь: {{ $route.fullPath }}</strong>
      </div> -->
      <div class="font-monospace">
        <strong>Статус пользователя: </strong> {{ userStore.isAuth ? "auth" : "guest" }}
      </div>
      <div class="font-monospace">
        <strong>Корзина с сервера: </strong> {{ shopStore.cart }}
      </div>
    </div>
  </nav>
  <main class="mt-5">
    <RouterView />
  </main>
  <footer>
    <div class="container mt-5">
      <button class="btn btn-danger" @click="tryLogout">Log out</button>
    </div>
  </footer>
</template>
