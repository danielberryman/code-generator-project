const fs = require('fs');
const { authSecretContent } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync('./.env');
  const text = buffer.toString();
  fs.writeFileSync('./.env', text + authSecretContent);
} catch (err) {
  console.error(err);
}
