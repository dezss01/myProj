import createAlertsStore from "./alerts";
import createCartStore from "./cart";
import createUserStore from "./user";
import createCatalogStore from "./catalog";

export default function createStore(api, pinia) {
  const useCatalog = createCatalogStore().bind(null, pinia);
  const useAlerts = createAlertsStore().bind(null, pinia);
  const useUser = createUserStore().bind(null, pinia);
  const useCart = createCartStore(useCatalog, api.cart).bind(null, pinia);
  return {
    useCart,
    useCatalog,
    useAlerts,
    useUser,
  };
}
// const modules = {
//   useUser: createUserStore(),
//   useCart: createCartStore(api.cart),
//   useCatalog: createCatalogStore(),
//   useCounter: createCounterStore(),
// };

// return Object.fromEntries(
//   Object.entries(modules).map(([name, useFn]) => [name, () => useFn(pinia)])
// );
