const fs = require("fs");
const { tscOutdir } = require("../../constants/express");

try {
  const buffer = fs.readFileSync("./tsconfig.json");
  const text = buffer.toString();
  const editedText = text.replace(tscOutdir.ref, tscOutdir.content);
  fs.writeFileSync("./tsconfig.json", editedText);
} catch (err) {
  console.error(err);
}
