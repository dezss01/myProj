<script setup>
import { inject } from 'vue';
const api = inject('api');

const props = defineProps({
  id: { type: Number, required: true },
});

const productInfo = await api.catalog.one(props.id);
</script>

<template>
  <pre>{{ JSON.stringify(productInfo.reviews, null, 2) }}</pre>
</template>
