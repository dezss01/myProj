import { defineStore } from "pinia";
import { ref, computed } from "vue";

export default function createUserStore() {
  return defineStore("user", () => {
    let readyResolver = null;
    const ready = new Promise((resolve) => (readyResolver = resolve));
    const user = ref(null);
    const isAuth = computed(() => user.value !== null);

    function setUser(newUser) {
      user.value = newUser;
      readyResolver();
    }

    return { user, isAuth, ready, setUser };
  });
}
