import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import createHttpPlugin from "./plugins/http";
import initErrorsAlerts from "./connectors/initErrorsAlert";
import { createApi } from "./api";
import createStore from "./store";

export default function makeApp() {
  const app = createApp(App);
  const http = createHttpPlugin();
  const api = createApi(http);
  const store = createStore(api);
  console.log(store);
  const pinia = createPinia();

  app.use(pinia);
  app.provide("api", api);
  app.provide("store", store);

  initErrorsAlerts(http, store.useCounter);
  store.useShop().initCart();
  return { app };
}
