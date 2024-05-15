export default function initPagesAuthGuard(router, useUserStore) {
  router.beforeEach(async function (to, _from, next) {
    const onlyAuth = to.matched.some((r) => r.meta.auth);
    const onlyGuest = to.matched.some((r) => r.meta.guest);

    if (onlyAuth || onlyGuest) {
      const userStore = useUserStore();
      await userStore.ready;

      if (onlyAuth && !userStore.isAuth) {
        next({ name: "auth.login" });
      } else if (onlyGuest && userStore.isAuth) {
        next({ name: "office.profile" });
      } else {
        next();
      }
    } else {
      next();
    }
  });
}
