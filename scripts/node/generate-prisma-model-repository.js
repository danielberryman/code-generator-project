// Read from the schema file
const fs = require("fs");
const path = "../schema.json";
const modelName = process.argv[2];

const dtoFieldsRef = /\/\/ dtoFields/g;
const newDtoFieldsRef = /\/\/ newDtoFields/g;

try {
  const buffer = fs.readFileSync(path);
  const json = JSON.parse(buffer);
  const schema = json[modelName];
  const fields = schema.fields;

  let fieldNames = [];
  let newFieldNames = [];

  for (const field of fields) {
    fieldNames.push(
      `${field.name}?: ${field.tstype ? field.tstype : field.type};`
    );
    newFieldNames.push(
      `${field.name}${field.optional ? "?" : ""}: ${
        field.tstype ? field.tstype : field.type
      };`
    );
  }

  fieldNames = fieldNames.join("\n");

  newFieldNames.push("user:{connect:{id: string;};};");
  newFieldNames = newFieldNames.join("\n");

  // Read and replace based on a ref
  const repositoryPath = `./repositories/${
    modelName.charAt(0).toUpperCase() + modelName.slice(1)
  }Repository.ts`;
  const repositoryBuffer = fs.readFileSync(repositoryPath);
  const text = repositoryBuffer.toString();
  let editedText = text.replace(dtoFieldsRef, fieldNames);
  editedText = editedText.replace(newDtoFieldsRef, newFieldNames);
  fs.writeFileSync(repositoryPath, editedText);
} catch (err) {
  console.error(err);
}
