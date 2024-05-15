<script setup>
import { computed, inject, ref, watch } from "vue";
import AppMinMax from "../MinMax.vue";

const { useCart, useCatalog } = inject("store");

const cartStore = useCart();
const catalogStore = useCatalog();

const props = defineProps({
  id: { type: Number, required: true },
});
const product = computed(() => catalogStore.getProduct(props.id));
const cartCnt = computed(() => cartStore.cartCnt(product.value.id));
const tmpCartCnt = ref(cartCnt.value);
watch(cartCnt, () => {
  tmpCartCnt.value = cartCnt.value;
});
let cntTimeout = null;

function onSetCnt(cnt) {
  tmpCartCnt.value = cnt;
  clearTimeout(cntTimeout);
  cntTimeout = setTimeout(() => cartStore.setCnt(props.id, tmpCartCnt.value), 300);
}
</script>

<template>
  <div>
    <div v-if="cartCnt > 0" class="row">
      <div class="col col-auto">
        <button @click="cartStore.removeFromCart(id)" class="btn btn-danger">X</button>
      </div>
      <div class="col col-auto">
        <AppMinMax :min="1" :max="product.rest" :value="cartCnt" @change="onSetCnt" />
      </div>
    </div>
    <button v-else class="btn btn-success" @click="cartStore.addToCart(id)">
      Add to cart
    </button>
  </div>
</template>
