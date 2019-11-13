import supertest from "supertest";
import assert from 'assert';

import { server } from "./server";

it("GET /", async () => {
  let res = await supertest(server).get("/").expect(200);
  assert.equal(res.body.ok, true, "res.body.ok is `true`");
  assert.equal(typeof res.body.uptime, 'number', "res.body.uptime is a `number`");
});
