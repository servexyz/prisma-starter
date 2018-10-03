import test from "ava";
import isReachable from "is-reachable";
import delay from "delay";
const isTravis = require("is-travis");
const { prisma } = require("../../prisma-client");
test.before(async t => {
  //TODO: Figure out less lazy solution; https://github.com/servexyz/prisma-starter/pull/25#issuecomment-419687114
  //? This maybe: https://github.com/servexyz/prisma-starter/issues/38
  let ms = isTravis ? 25000 : 5000;
  console.log(
    `Waiting ${ms}ms before running tests to prevent race case (ie. nodemon or docker-compose)`
  );
  await delay(ms);
});

test(`http://localhost:4000 is reachable`, async t => {
  t.true(await isReachable("http://localhost:4000"));
});

test(`http://localhost:4466 is reachable`, async t => {
  t.true(await isReachable("http://localhost:4466"));
});

test(`await prisma.foos() via prisma-client`, async t => {
  let foos = await prisma.foos();
  console.log(`foos: ${JSON.stringify(foos, null, 2)}`);
  t.truthy(foos);
});

test(`createSampleJson `);
