export default function createCartApi(http) {
  return {
    async load(token) {
      const response = await http.get(`/cart/load.php?token=${token}`);
      return response.data;
    },
    async add(token, id) {
      const response = await http.get(`/cart/add.php?token=${token}&id=${id}`);
      return response.data;
    },
    async changeCnt(token, id, cnt) {
      const response = await http.get(
        `/cart/change.php?token=${token}&id=${id}&cnt=${cnt}`
      );
      return response.data;
    },
    async removeItem(token, id) {
      const response = await http.get(
        `/cart/remove.php?token=${token}&id=${id}`
      );
      return response.data;
    },
  };
}
