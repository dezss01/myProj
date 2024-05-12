<script setup>
import { inject } from "vue";
import { useCounterStore } from './store/counter.js'


const http = inject('http')
const counterStore = useCounterStore();
const httpRes = http.get('products/index.php')
</script>

<template>
  <div>
    hi
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
  </div>
</template>