import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import createHttpPlugin from "./plugins/http";
import initErrorsAlerts from "./connectors/initErrorsAlert";
import { createApi } from "./api/index.js";
import createStore from "./store/index.js";
import initPagesAuthGuard from "./connectors/initPagesAuthGuard.js";
import createAppRouter from "./router/index.js";

export default async function makeApp() {
  const app = createApp(App);
  const http = createHttpPlugin();
  const api = createApi(http);
  const pinia = createPinia();
  const store = createStore(api, pinia);
  const router = createAppRouter();

  app.use(pinia);
  app.use(router);

  app.provide("api", api);
  app.provide("store", store);

  initPagesAuthGuard(router, store.useUser);
  initErrorsAlerts(http, store.useAlerts);

  if (!import.meta.env.SSR) {
    store.useCart().initCart();
  }

  const products = await api.catalog.all();
  store.useCatalog().setProducts(products);

  return { app, http, api, store, pinia, router };
}
