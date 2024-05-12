import createCartApi from "./cart";
import createCatalogApi from "./catalog";

export function createApi(http) {
  return {
    cart: createCartApi(http),
    catalog: createCatalogApi(http),
  };
}
