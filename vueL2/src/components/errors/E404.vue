<script setup>
const props = defineProps({
  text: { type: String, default: "Page not found" },
});
</script>

<template>
  <div class="container">
    <h1>Error 404</h1>
    <div class="alert alert-warning">
      {{ text }}
    </div>
  </div>
</template>
