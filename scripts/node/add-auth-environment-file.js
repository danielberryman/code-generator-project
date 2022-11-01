const fs = require('fs');
const { authEnvironmentContent } = require("../../constants/express.js");

try {
  fs.writeFileSync('./environment.d.ts', authEnvironmentContent)
} catch (err) {
  console.error(err);
}
