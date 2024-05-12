import { defineStore } from "pinia";
import { computed, ref } from "vue";

export default function createUserStore() {
  return defineStore("user", () => {
    const user = ref(null);
    const userMoney = ref(3000);
    const isAuth = computed(() => user.value !== null);
    function setUser(usr) {
      user.value = usr;
    }
    return { user, isAuth, setUser, userMoney };
  });
}
