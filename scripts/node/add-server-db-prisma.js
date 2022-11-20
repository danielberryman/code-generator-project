const fs = require("fs");
const { serverDbPrisma } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync("./index.ts");
  const text = buffer.toString();
  const editedText = text.replace(serverDbPrisma.ref, serverDbPrisma.content);
  fs.writeFileSync("./index.ts", editedText);
} catch (err) {
  console.error(err);
}
