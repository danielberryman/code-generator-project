const fs = require("fs");
const { serverRouting } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync("./index.ts");
  const text = buffer.toString();
  const editedText = text.replace(serverRouting.ref, serverRouting.content);
  fs.writeFileSync("./index.ts", editedText);
} catch (err) {
  console.error(err);
}
