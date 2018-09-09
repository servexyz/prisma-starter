import test from "ava";
import isReachable from "is-reachable";

test("localhost:4000 is reachable", async t => {
  t.true(await isReachable("localhost:4000"));
});

test("localhost:4466 is reachable", async t => {
  t.true(await isReachable("localhost:4000"));
});
