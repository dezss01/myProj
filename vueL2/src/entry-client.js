import makeApp from "./main";
import "bootstrap/dist/css/bootstrap.min.css";

(function () {
  const { app, api, store } = makeApp();
  api.catalog.all().then((products) => {
    store.useProducts().setProducts(products);
    app.mount("#app");
  });
  api.auth.check().then((user) => {
    if (user) {
      store.useUser().setUser(user);
    }
  });
})();
