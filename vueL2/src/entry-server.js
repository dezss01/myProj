import makeApp from "./main";
// not run it

export default function runApp(url) {
  const { app } = makeApp();
  /*
    router.push(url)
    await router ready
    etc
  */
  return { app };
}
