import test from "ava";
import sample from "./es6";
import path from "path";
import got from "got";
test("foo", t => {
  t.pass();
});

test("bar", async t => {
  const bar = Promise.resolve("bar");

  t.is(await bar, "bar");
});

const url = "https://jsonplaceholder.typicode.com/comments";
test("import works even though no babel", t => {
  const filePath = path.join(__dirname, "output.json");
  sample(url, filePath);
  t.pass();
});

test("got works", async t => {
  let foo = await got(url);
  console.log(foo);
  t.pass();
});
