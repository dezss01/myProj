import createCounterStore from "./counter";
import createShopStore from "./shop";
import createUserStore from "./user";

export default function createStore(api) {
  return {
    useShop: createShopStore(api.cart),
    useCounter: createCounterStore(),
    useUser: createUserStore(),
  };
}
