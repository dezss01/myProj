import createAuthApi from "./auth";
import createCartApi from "./cart";
import createCatalogApi from "./catalog";

export function createApi(http) {
  return {
    auth: createAuthApi(http),
    cart: createCartApi(http),
    catalog: createCatalogApi(http),
  };
}
