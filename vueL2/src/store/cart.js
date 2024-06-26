import { defineStore } from "pinia";
import { ref, computed } from "vue";

export default function createCartStore(useCatalog, cartApi) {
  return defineStore("cart", () => {
    const cart = ref([]);
    const token = ref(null);

    const total = computed(() => {
      // console.log("total");
      const catalogStore = useCatalog();
      return cart.value.reduce((total, cartItem) => {
        const product = catalogStore.getProduct(cartItem.id);
        if (product) {
          return total + product.price * cartItem.cnt;
        } else {
          return total;
        }
      }, 0);
    });

    async function initCart() {
      const oldToken = localStorage.getItem("CART_TOKEN");
      const cartInfo = await cartApi.load(oldToken);

      if (cartInfo.needUpdate) {
        localStorage.setItem("CART_TOKEN", cartInfo.token);
      }
      token.value = cartInfo.token;
      cart.value.push(...cartInfo.cart);
      // console.log("initCart");
    }

    const inCart = (id) => cart.value.some((item) => item.id === id);
    const cartCnt = (id) => cart.value.find((item) => item.id === id)?.cnt ?? 0;

    async function addToCart(id) {
      if (!inCart(id)) {
        const res = await cartApi.add(token.value, id);
        if (res) {
          cart.value.push({ id, cnt: 1 });
        }
      }
    }

    async function removeFromCart(id) {
      if (inCart(id)) {
        let index = cart.value.findIndex((cartItem) => cartItem.id === id);
        if (index > -1) {
          const res = await cartApi.removeItem(token.value, id);
          if (res) {
            cart.value.splice(index, 1);
          }
        }
      }
    }

    async function setCnt(id, cnt) {
      if (inCart(id)) {
        const res = await cartApi.changeCnt(token.value, id, cnt);
        if (res) {
          const item = cart.value.find((cartItem) => cartItem.id === id);
          item.cnt = cnt;
        }
      }
    }

    return {
      cart,
      total,
      initCart,
      addToCart,
      removeFromCart,
      inCart,
      cartCnt,
      setCnt,
    };
  });
}
