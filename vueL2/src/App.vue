<script setup>
import { inject } from "vue";
import { RouterView, RouterLink } from "vue-router";
import AppAlerts from "./components/Alerts.vue";
const { useCart, useUser } = inject("store");

const cartStore = useCart();
const userStore = useUser();
</script>

<template>
  <nav>
    <div class="container">
      <AppAlerts />
      <div class="mt-3 mb-3 d-flex gap-3">
        <div>
          <RouterLink :to="{ name: 'home' }" class="btn btn-success btn-sm"
            >Home</RouterLink
          >
        </div>
        <div>
          <RouterLink :to="{ name: 'catalog' }" class="btn btn-success btn-sm"
            >Catalog</RouterLink
          >
        </div>
        <div>
          <RouterLink :to="{ name: 'office' }" class="btn btn-success btn-sm"
            >Office</RouterLink
          >
        </div>
        <div>
          <RouterLink :to="{ name: 'auth.login' }" class="btn btn-success btn-sm"
            >Auth Login</RouterLink
          >
        </div>
      </div>
      <div>
        <strong>Текущий путь: {{ $route.fullPath }}</strong>
      </div>
      <div class="font-monospace">
        <strong>Статус пользователя: </strong> {{ userStore.isAuth ? "auth" : "guest" }}
      </div>
      <div class="font-monospace">
        <strong>Корзина с сервера: </strong> {{ cartStore.cart }}
      </div>
    </div>
  </nav>
  <main class="container mt-5">
    <hr />
    Тут должна быть страница отображаемая RouterView
    <hr />
    <RouterView />
  </main>
  <footer>
    <div class="container mt-5">
      <button class="btn btn-danger" @click="">Хуита</button>
    </div>
  </footer>
</template>
