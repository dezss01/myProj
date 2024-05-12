<script setup>
import { inject } from "vue";
const api = inject('api')
const { useCounter } = inject('store')
const counterStore = useCounter()
const r = api.catalog.all()
</script>

<template>
  <div>
    <div>
      {{ r }}
    </div>
    hi
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
  </div>
</template>