import http from "../plugins/http";

export async function load(token) {
  const response = await http.get(`/cart/load.php?token=${token}`);
  return response.data;
}
export async function add(token, id) {
  const response = await http.get(`/cart/add.php?token=${token}&id=${id}`);
  return response.data;
}

export async function changeCnt(token, id, cnt) {
  const response = await http.get(
    `/cart/change.php?token=${token}&id=${id}&cnt=${cnt}`
  );
  return response.data;
}

export async function removeItem(token, id) {
  const response = await http.get(`/cart/remove.php?token=${token}&id=${id}`);
  return response.data;
}
