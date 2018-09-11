import test from "ava";
import isReachable from "is-reachable";
import delay from "delay";
const nodemon = require("nodemon");
const isTravis = require("is-travis");

test.before(async t => {
  //TODO: Figure out less lazy solution
  // ? Relevant PR comment: https://github.com/servexyz/prisma-starter/pull/25#issuecomment-419687114
  let ms = isTravis ? 10000 : 5000;
  console.log(
    `Waiting ${ms}ms before restarting to prevent race case with nodemon's watch`
  );
});

test(`localhost:4000 is reachable`, async t => {
  t.true(await isReachable("http://localhost:4000"));
});

test(`localhost:4466 is reachable`, async t => {
  t.true(await isReachable("http://localhost:4466"));
});
