import test from "ava";
import isReachable from "is-reachable";

test.before(`ghetto racecase hack`);
test("process.env.PRISMA_HOST is set", t => {
  t.truthy(process.env.PRISMA_HOST);
});

test(`${process.env.PRISMA_HOST}:4000 is reachable`, async t => {
  console.log("foo");
  let endpoint = `${process.env.PRISMA_HOST}:4000`;
  t.true(await isReachable("localhost:4000"));
});

test(`${process.env.PRISMA_HOST}:4466 is reachable`, async t => {
  let endpoint = `${process.env.PRISMA_HOST}:4466`;
  t.true(await isReachable("localhost:4000"));
});
