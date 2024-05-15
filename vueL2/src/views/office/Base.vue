<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <strong>Office Base Page</strong>
    <div class="d-flex gap-3">
      <RouterLink :to="{ name: 'office.profile' }" class="btn btn-success"
        >Ofiice profile</RouterLink
      >
      <RouterLink :to="{ name: 'office.other' }" class="btn btn-success"
        >Ofiice other</RouterLink
      >
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
