import test from "ava";
import isReachable from "is-reachable";
import delay from "delay";
const nodemon = require("nodemon");
const isTravis = require("is-travis");

test.before(async t => {
  //TODO: Figure out less lazy solution
  // ? Relevant PR comment: https://github.com/servexyz/prisma-starter/pull/25#issuecomment-419687114
  console.log(
    "Waiting 3 seconds before restarting to prevent race case with nodemon's watch"
  );
  await delay(3000);
});
//TODO: Remove PRISMA_HOST in place of using PRISMA_ENDPOINT. Lazy / duplicative
test("process.env.PRISMA_HOST is set", t => {
  t.truthy(process.env.PRISMA_HOST);
});

test(`${process.env.PRISMA_HOST}:4000 is reachable`, async t => {
  let endpoint = isTravis
    ? `${process.env.PRISMA_HOST}:4000`
    : `http://localhost:4000`;
  t.true(await isReachable("http://localhost:4000"));
});

test(`${process.env.PRISMA_HOST}:4466 is reachable`, async t => {
  let endpoint = isTravis
    ? `${process.env.PRISMA_HOST}:4466`
    : `http://localhost:4466`;

  t.true(await isReachable("http://localhost:4466"));
});
