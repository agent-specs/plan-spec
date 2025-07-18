#!/usr/bin/env node
import Ajv from "ajv/dist/2020";
import { readFileSync } from "fs";
import { resolve } from "path";

const schemaFile = resolve(__dirname, "..", "spec", "plan-schema.json");
const schema     = JSON.parse(readFileSync(schemaFile, "utf8"));
const data       = JSON.parse(readFileSync(process.argv[2], "utf8"));

const ajv  = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

if (validate(data)) {
  console.log("✔  valid");
  process.exit(0);
} else {
  console.error("✖  invalid\n", validate.errors);
  process.exit(1);
}
