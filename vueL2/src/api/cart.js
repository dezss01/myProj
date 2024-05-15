export default function createCartApi(http) {
  return {
    async load(token) {
      const response = await http.get(`/cart/load.php?token=${token}`, {
        errorStub: {
          text: "при загрузке корзины с сервера",
          fallback: {
            cart: [],
            token: null,
            needUpdate: false,
          },
          criticat: true,
        },
      });
      return response.data;
    },
    async add(token, id) {
      const response = await http.get(`/cart/add.php?token=${token}&id=${id}`, {
        errorStub: {
          text: "при добавлении товара в корзину",
          fallback: false,
        },
      });
      return response.data;
    },
    async changeCnt(token, id, cnt) {
      const response = await http.get(
        `/cart/change.php?token=${token}&id=${id}&cnt=${cnt}`,
        {
          errorStub: {
            text: "при изменении количества товара в корзине",
            fallback: false,
          },
        }
      );
      return response.data;
    },
    async removeItem(token, id) {
      const response = await http.get(
        `/cart/remove.php?token=${token}&id=${id}`,
        {
          errorStub: {
            text: "при удалении товара из корзины",
            fallback: false,
          },
        }
      );
      return response.data;
    },
  };
}
