import makeApp from "./main";
// not run it

export default async function runApp(url) {
  const { app, router } = await makeApp();
  router.push(url);
  await router.isReady();

  return { app };
}
