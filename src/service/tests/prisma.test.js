require("dotenv").config();
import test from "ava";
import isReachable from "is-reachable";
import delay from "delay";
import moment from "moment";
const isTravis = require("is-travis");
const { prisma } = require("../../../prisma-client");
import { request } from "graphql-request";

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

test("createSampleJson via graphql-request", async t => {
  const mutation = `mutation createSampleJson($data:SampleJsonCreateInput!) {
    createSampleJson(data:$data) {
      id
      json
      jsons
    }
  }
  `;

  let time = moment()
    .format("LTS")
    .replace(/ /g, "");

  const variables = {
    data: {
      json: { a: 1, time },
      jsons: { set: [{ b: 2, c: 3 }, { d: 4, e: 5 }] }
    }
  };

  t.notThrows(() => {
    request("http://localhost:4000", mutation, variables)
      .then(({ createSampleJson }) => {
        console.log(`createSampleJson: ${createSampleJson}`);
      })
      .catch(err => {
        console.log(`err: ${err}`);
      });
  });
});
