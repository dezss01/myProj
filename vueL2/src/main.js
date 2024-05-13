import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import createHttpPlugin from "./plugins/http";
import initErrorsAlerts from "./connectors/initErrorsAlert";
import { createApi } from "./api/index.js";
import createStore from "./store/index.js";
import router from "./router/index.js";

export default function makeApp() {
  const app = createApp(App);
  const http = createHttpPlugin();
  const api = createApi(http);
  const store = createStore(api);
  const pinia = createPinia();

  app.use(pinia);
  app.use(router);
  app.provide("api", api);
  app.provide("store", store);

  initErrorsAlerts(http, () => store.useCounter(pinia));
  store.useShop().initCart();
  return { app, http, api, store, pinia };
}
