import test from "ava";
import isReachable from "is-reachable";
import delay from "delay";
const isTravis = require("is-travis");

test.before(async t => {
  //TODO: Figure out less lazy solution; https://github.com/servexyz/prisma-starter/pull/25#issuecomment-419687114
  let ms = isTravis ? 10000 : 5000;
  console.log(`Waiting ${ms}ms before restarting to prevent race case`);
  await delay(ms);
});

// test(`http://localhost:4000 is reachable`, async t => {
//   t.true(await isReachable("http://localhost:4000"));
// });

// test(`http://localhost:4466 is reachable`, async t => {
//   t.true(await isReachable("http://localhost:4466"));
// });

// test(`localhost:4000 is reachable`, async t => {
//   t.true(await isReachable("localhost:4000"));
// });

// test(`localhost:4466 is reachable`, async t => {
//   t.true(await isReachable("localhost:4466"));
// });
