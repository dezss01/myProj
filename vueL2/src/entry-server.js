import makeApp from "./main";

export default function runApp(url) {
  const { app } = makeApp();
  /*
    router.push(url)
    await router ready
    etc
  */
  return { app };
}
