const fs = require("fs");
const path = "../schema.json";
const modelName = process.argv[2];
const modelNameTitleCase =
  modelName.charAt(0).toUpperCase() + modelName.slice(1);
const pageFilePath = `./src/pages/${modelNameTitleCase}s/Create${modelNameTitleCase}.tsx`;

const defaultStateRef = "// defaultCreateState";
const requestBodyRef = "// postRequestBody";
const formInputsRef = "// formInputs";

const typeDefaultValues = {
  string: '""',
  boolean: false,
  number: 0,
  datetime: null,
};

const typeDefaultInputTypes = {
  email: "email",
  password: "password",
  passwordConfirmation: "password",
  dueDate: "date",
};

try {
  const buffer = fs.readFileSync(path);
  const json = JSON.parse(buffer);
  const schema = json[modelName];
  const fields = schema.fields;

  let defaultState = [];
  let requestBody = [];
  let formInputs = [];

  for (const field of fields) {
    // Build default state
    defaultState.push(
      `${field.name}: ${
        typeDefaultValues[field.tstype ? field.tstype : field.type]
      },`
    );

    // Build the post request body
    requestBody.push(`${field.name}: form.${field.name},`);

    // Build the form inputs
    const type = typeDefaultInputTypes[field.name]
      ? typeDefaultInputTypes[field.name]
      : "text";
    if (field.type === "datetime") {
      type = "date";
    }
    let input = "";

    if (field.type === "boolean") {
      input = `
            <div className={styles.form_group}>
                <label>${field.name}:</label>
                <div className={styles.input}>
                    <input
                    className={styles.input}
                    type="checkbox" 
                    name="${field.name}" 
                    value="${field.name}"
                    onChange={handleChange}
                    ${field.optional ? "" : "required"} />
                </div>
            </div>`;
    } else {
      input = `
            <div className={styles.form_group}>
                <label>${field.name}:</label>
                <input
                className={styles.input}
                type="${type}"
                name="${field.name}"
                placeholder="${field.name}"
                value={form.${field.name}}
                onChange={handleChange}
                ${field.optional ? "" : "required"} />
            </div>`;
    }

    formInputs.push(input);
  }

  defaultState = defaultState.join("\n");
  requestBody = requestBody.join("\n");
  formInputs = formInputs.join("\n");

  const pageFilebuffer = fs.readFileSync(pageFilePath);
  let content = pageFilebuffer.toString();
  content = content.replace(defaultStateRef, defaultState);
  content = content.replace(requestBodyRef, requestBody);
  content = content.replace(formInputsRef, formInputs);
  fs.writeFileSync(pageFilePath, content);
} catch (err) {
  console.error(err);
}
