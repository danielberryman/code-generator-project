const fs = require('fs');
const { serverAuth } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync('./index.ts');
  const text = buffer.toString();
  const editedText = text.replace(serverAuth.ref, serverAuth.content);
  fs.writeFileSync('./index.ts', editedText)
} catch (err) {
  console.error(err);
}
