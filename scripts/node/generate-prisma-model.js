// Read from the schema file
const fs = require("fs");
const path = "../schema.json";
const modelName = process.argv[2];

const DATA_TYPE_MAP = {
  string: "String",
  boolean: "Boolean",
  number: "Int",
  datetime: "DateTime",
};

const nextRelationshipRef = "// nextRelationship";

try {
  const buffer = fs.readFileSync(path);
  const json = JSON.parse(buffer);
  const schema = json[modelName];
  const fields = schema.fields;

  let resultFields = "";
  for (const field of fields) {
    let resultField = `\t\t${field.name}\t\t\t\t${DATA_TYPE_MAP[field.type]}`;

    if (field.optional) {
      resultField += "?";
    }

    if (field.unique) {
      resultField += " @unique";
    }

    if (field.map) {
      resultField += ` @map("${field.map}")`;
    }

    if (field.default) {
      resultField += ` @default(${field.default})`;
    }

    resultFields += `${resultField}\n`;
  }

  // Build result to add to schema.prisma
  const result = `\nmodel ${
    modelName.charAt(0).toUpperCase() + modelName.slice(1)
  } {
    id            String    @id @default(cuid())

    ${resultFields}
    createdAt DateTime @default(now()) @map(name: "created_at")
    updatedAt DateTime @updatedAt @map(name: "updated_at")

    userId          String  @map("user_id")     
    user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}`;

  const nextRelationship = `${modelName}s ${
    modelName.charAt(0).toUpperCase() + modelName.slice(1)
  }[]\n// nextRelationship`;

  // Read and add to bottom of the file
  const schemaPrismaPath = "./prisma/schema.prisma";
  const schemaPrismaBuffer = fs.readFileSync(schemaPrismaPath);

  let currentContent = schemaPrismaBuffer.toString();
  currentContent = currentContent.replace(
    nextRelationshipRef,
    nextRelationship
  );
  fs.writeFileSync(schemaPrismaPath, currentContent + result);
} catch (err) {
  console.error(err);
}
