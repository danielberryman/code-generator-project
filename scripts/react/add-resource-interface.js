const fs = require("fs");
const path = "../schema.json";
const newFilePath = "./src/interfaces/";
const modelName = process.argv[2];
const fileName = modelName.charAt(0).toUpperCase() + modelName.slice(1) + ".ts";

try {
  const buffer = fs.readFileSync(path);
  const json = JSON.parse(buffer);
  const schema = json[modelName];
  const fields = schema.fields;

  let fieldResults = [];

  for (const field of fields) {
    fieldResults.push(
      `${field.name}?: ${field.tstype ? field.tstype : field.type};`
    );
  }
  fieldResults = fieldResults.join("\n");

  const result = `export interface ${
    modelName.charAt(0).toUpperCase() + modelName.slice(1)
  } { ${fieldResults} }`;
  fs.writeFileSync(newFilePath + fileName, result);
} catch (err) {
  console.error(err);
}
