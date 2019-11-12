import { server } from "./server";

const config = {
  port: 8080
};

server.listen(config.port, () =>
  console.log(`ESM com esm em: http://localhost:${config.port}`)
);
