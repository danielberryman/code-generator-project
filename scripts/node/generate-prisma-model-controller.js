// Read from the schema file
const fs = require("fs");
const path = "../schema.json";
const modelName = process.argv[2];

const fieldNamesRef = /\/\/ fieldNames/g;
const newDtoFieldNamesRef = /\/\/ newDtoFieldNames/g;
const requireChecksRef = "// requireChecks";
const optionalChecksRef = "// optionalChecks";
const updateAssignmentsRef = "// updateAssignments";

try {
  const buffer = fs.readFileSync(path);
  const json = JSON.parse(buffer);
  const schema = json[modelName];
  const fields = schema.fields;

  let fieldNames = [];
  let newDtoFieldNames = [];
  let requireChecks = "";
  let optionalChecks = "";
  let updateAssignments = "";

  for (const field of fields) {
    // Build controller createOne replacements
    fieldNames.push(field.name);

    if (!field.optional) {
      if (field.type === "boolean") {
        requireChecks += `if (${field.name} === null && ${field.name} === undefined) throw Error("${field.name} is required.");\n`;
      } else {
        requireChecks += `if (!${field.name}) throw Error("${field.name} is required.");\n`;
      }

      let fieldNameResult = field.name;
      if (field.type === "number") {
        fieldNameResult = `${field.name}: +${field.name}`;
      }
      newDtoFieldNames.push(fieldNameResult);
    }

    if (field.optional) {
      optionalChecks += `if (${field.name}) newTaskDto.${field.name} = ${field.name};\n`;
    }

    // Build controller updateOneById replacements
    if (field.type === "date") {
      updateAssignments += `if (${field.name}) ${modelName}Dto.${field.name} = new Date(${field.name});\n`;
    } else {
      updateAssignments += `if (${field.name}) ${modelName}Dto.${field.name} = ${field.name};\n`;
    }
  }

  fieldNames = fieldNames.join(", ");

  // Read and replace based on a ref
  const controllerPath = `./controllers/${
    modelName.charAt(0).toUpperCase() + modelName.slice(1)
  }Controller.ts`;
  const controllerBuffer = fs.readFileSync(controllerPath);
  const text = controllerBuffer.toString();
  let editedText = text.replace(fieldNamesRef, fieldNames);
  editedText = editedText.replace(newDtoFieldNamesRef, newDtoFieldNames);
  editedText = editedText.replace(requireChecksRef, requireChecks);
  editedText = editedText.replace(optionalChecksRef, optionalChecks);
  editedText = editedText.replace(updateAssignmentsRef, updateAssignments);
  fs.writeFileSync(controllerPath, editedText);
} catch (err) {
  console.error(err);
}
