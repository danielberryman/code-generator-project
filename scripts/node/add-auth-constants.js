const fs = require('fs');
const { authConstantsContent } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync('./constants.ts');
  const text = buffer.toString();
  fs.writeFileSync('./constants.ts', text + authConstantsContent);
} catch (err) {
  console.error(err);
}
