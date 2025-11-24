import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server running...");
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello I'm Raw Nodejs and Typescript Server",
          path: req.url,
        })
      );
    }
  }
);
server.listen(config.port, () => {
  console.log(`Server running on Port: ${config.port}`);
});
