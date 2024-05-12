import http from "../plugins/http";

export async function all() {
  const response = await http.get("/products/index.php");
  return response.data;
}

export async function one(id) {
  const response = await http.get(`/products/index.php?id=${id}`);
  return response.data;
}
