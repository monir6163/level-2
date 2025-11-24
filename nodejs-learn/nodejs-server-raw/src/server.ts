import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello I'm Raw Nodejs and Typescript Server",
          path: req.url,
        })
      );
    }
    if (req.url == "/api/create/user" && req.method == "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        // res.writeHead(201, { "content-type": "application/json" });
        const parseBody = JSON.parse(body);
        res.end(JSON.stringify(parseBody));
      });
    }
  }
);
server.listen(config.port, () => {
  console.log(`Server running on Port: ${config.port}`);
});
