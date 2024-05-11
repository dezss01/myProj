import { createServer } from "http";
import runApp from "./dist-ssr/entry-server.js";
import { renderToString } from "vue/server-renderer";

const server = createServer(function (req, resp) {
  console.log("--------------start---------------");
  const { app } = runApp("/");
  renderToString(app).then((html) => {
    resp.end(html);
  });
  console.log("--------------end---------------");
});

server.listen(3000);
