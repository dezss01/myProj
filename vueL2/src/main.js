import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import createHttpPlugin from "./plugins/http";

export default function makeApp() {
  const app = createApp(App);
  const pinia = createPinia();
  const http = createHttpPlugin(pinia);

  app.use(pinia);
  app.provide("http", http);
  return { app };
}
