import test from "ava";

test("ava works...", t => {
  t.pass();
});

test("............as expected", async t => {
  const bar = Promise.resolve("bar");

  t.is(await bar, "bar");
});
