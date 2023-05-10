import Ajv from "ajv";
import fs from 'fs';
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}



const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: false
}

const validate = ajv.compile(schema)

const data = {
  foo: 1,
  bar: "abc"
}

const valid = validate(data)
if (!valid) console.log(validate.errors)

fs.writeFile('validate_json_fs.txt', ('validate.errors = '+validate.errors + " for schema = " + JSON.stringify(schema, null, 2)) , function (err) {
  if (err) throw err;
    console.log('Replaced!');
});