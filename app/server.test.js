import supertest from "supertest";
import assert from 'assert';

import { server } from "./server";

it("GET /", (done) => {
  supertest(server)
    .get("/")
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;

      assert.equal(res.body.ok, true, "res.body.ok is `true`");
      assert.equal(typeof res.body.uptime, 'number', "res.body.uptime is a `number`");

      done()
    });
});
