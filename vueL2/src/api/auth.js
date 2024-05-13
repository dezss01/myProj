export default function createAuthApi(_http) {
  const userFromServer = {
    id: 1,
    name: "admin",
    email: "1@1.ru",
  };
  return {
    async login({ email, password }) {
      await timeout(300);
      if (email == "1@1.ru" && password == "qwerty") {
        localStorage.setItem("auth", "1");
        return true;
      } else {
        return false;
      }
    },
    async logout() {
      await timeout(300);
      return localStorage.removeItem("auth");
    },
    async check() {
      await timeout(300);
      return localStorage.getItem("auth") == "1" ? userFromServer : null;
    },
  };
}
function timeout(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}
