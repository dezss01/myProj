import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheCatalog from "../views/TheCatalog.vue";
import OfficePage from "../views/office/Profile.vue";
import AuthLoginPage from "../views/auth/Login.vue";
import AppProduct from "../components/Product.vue";
import e404 from "../components/errors/E404.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: TheHome,
  },
  {
    name: "catalog",
    path: "/catalog",
    component: TheCatalog,
  },
  {
    name: "office.profile",
    path: "/office",
    component: OfficePage,
    meta: { auth: true },
  },
  {
    name: "auth.login",
    path: "/auth/login",
    component: AuthLoginPage,
    meta: { guest: true },
  },
  {
    name: "product",
    path: "/product/:id",
    component: AppProduct,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    // name: "notFound",
    component: e404,
  },
];

export default function createAppRouter() {
  const router = createRouter({
    routes,
    history: import.meta.env.SSR
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
  });

  return router;
}
