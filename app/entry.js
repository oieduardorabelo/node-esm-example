import { server } from "./server";

const config = {
  port: 8080
};

server.listen(config.port, () =>
  console.log(`Node.js usando ES Modules com "esm" em: http://localhost:${config.port}`)
);
