<script setup>
import { computed, inject, ref, watch } from "vue";
import AppMinMax from "../MinMax.vue";

const { useShop, useProducts } = inject('store');

const shopStore = useShop();
const productsStore = useProducts();


const props = defineProps({
  id: { type: Number, required: true },
});
const product = computed(() => productsStore.getProduct(props.id));
const cartCnt = computed(() => shopStore.cartCnt(product.value.id));
const tmpCartCnt = ref(cartCnt.value);
watch(cartCnt, () => {
  tmpCartCnt.value = cartCnt.value;
});
let cntTimeout = null;

function onSetCnt(cnt) {
  tmpCartCnt.value = cnt;
  clearTimeout(cntTimeout);
  cntTimeout = setTimeout(() => shopStore.setCnt(props.id, tmpCartCnt.value), 300);
}
</script>

<template>
  <div>
    <div v-if="cartCnt > 0" class="row">
      <div class="col col-auto">
        <button @click="shopStore.removeFromCart(id)" class="btn btn-danger">X</button>
      </div>
      <div class="col col-auto">
        <AppMinMax :min="1" :max="product.rest" :value="cartCnt" @change="onSetCnt" />
      </div>
    </div>
    <button v-else class="btn btn-success" @click="shopStore.addToCart(id)">
      Add to cart
    </button>
  </div>
</template>
