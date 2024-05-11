import { createApp } from "vue";
import App from "./App.vue";

export default function makeApp() {
  const app = createApp(App);
  // todo: pinia, router etc
  return { app };
}
