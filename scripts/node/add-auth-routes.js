const fs = require('fs');
const { authRoutes } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync('./routes.ts');
  const text = buffer.toString();
  const editedText = text.replace(authRoutes.ref, authRoutes.content);
  fs.writeFileSync('./routes.ts', editedText);
} catch (err) {
  console.error(err);
}
