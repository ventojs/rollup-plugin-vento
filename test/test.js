import vento from "../src/plugin.js";
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import { rollup } from "rollup";

test("Vento loader", async (t) => {
  const bundle = await rollup({
    input: "test/samples/main.js",
    plugins: [vento()],
  });

  const { output } = await bundle.generate({ format: "es" });
  fs.writeFileSync("test/samples/main.expected.js", output[0].code, "utf-8");
  const expected = fs.readFileSync("test/samples/main.expected.js", "utf-8");
  assert.equal(output[0].code, expected);
});
