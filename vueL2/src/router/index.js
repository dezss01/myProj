import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheCatalog from "../views/TheCatalog.vue";
import OfficeProfile from "../views/office/Profile.vue";
import AuthLoginPage from "../views/auth/Login.vue";
import AppProduct from "../components/Product.vue";
import e404 from "../components/errors/E404.vue";
import OfficeBase from "../views/office/Base.vue";
import OfficeOther from "../views/office/Other.vue";

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
    name: "office",
    path: "/office",
    component: OfficeBase,
    meta: { auth: true },
    children: [
      {
        name: "office.profile",
        path: "profile",
        component: OfficeProfile,
      },
      {
        name: "office.other",
        path: "other",
        component: OfficeOther,
      },
    ],
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
