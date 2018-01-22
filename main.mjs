// main.mjs

import express from "express";

const config = {
  port: 8080
};

const app = express();

app.get("/", (req, res) => res.json({ ok: true }));

app.listen(config.port, () =>
  console.log(`ESM com @std/esm em: http://localhost:${config.port}`)
);
