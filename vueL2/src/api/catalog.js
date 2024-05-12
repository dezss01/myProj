export default function createCatalogApi(http) {
  return {
    async all() {
      const response = await http.get("/products/index.php");
      return response.data;
    },
    async one(id) {
      const response = await http.get(`/products/index.php?id=${id}`);
      return response.data;
    },
  };
}
