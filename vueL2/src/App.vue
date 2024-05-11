<script setup>
import { useCounterStore } from './store/counter.js'
import http from './plugins/http.js'

const counterStore = useCounterStore();
const httpRes = http.get('products/index.php')
</script>

<template>
  <div>
    hi
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
  </div>
</template>