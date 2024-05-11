import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

export default function makeApp() {
  const app = createApp(App);
  const pinia = createPinia();
  app.use(pinia);
  // todo: pinia, router etc
  return { app };
}
