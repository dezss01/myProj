import { defineStore } from "pinia";
import { ref } from "vue";

export default function useProductStore() {
  return defineStore("products", () => {
    const products = ref(null);

    const getProduct = (id) => {
      // console.log("getProduct");
      return products.value.find((pr) => pr.id === id);
    };

    function setProducts(items) {
      products.value = items;
    }

    return {
      products,
      getProduct,
      setProducts,
    };
  });
}
