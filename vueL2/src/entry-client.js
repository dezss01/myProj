import makeApp from "./main";
import "bootstrap/dist/css/bootstrap.min.css";

(async function () {
  const { app, api, store } = await makeApp();

  app.mount("#app");

  api.auth.check().then((user) => {
    store.useUser().setUser(user);
  });
})();
