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
  // await delay(3000);
  isTravis ? await delay(10000) : await delay(5000);
});

test(`prisma:4000 is reachable`, async t => {
  t.true(await isReachable("prisma:4000"));
});

test(`prisma:4466 is reachable`, async t => {
  t.true(await isReachable("prisma:4466"));
});

test(`localhost:4000 is reachable`, async t => {
  t.true(await isReachable("localhost:4000"));
});

test(`localhost:4466 is reachable`, async t => {
  t.true(await isReachable("localhost:4466"));
});
