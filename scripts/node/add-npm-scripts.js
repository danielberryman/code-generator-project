const fs = require("fs");
const { npmScriptsContent } = require("../../constants/express.js");

try {
  const buffer = fs.readFileSync("./package.json");
  const json = JSON.parse(buffer);
  json.scripts = npmScriptsContent;
  fs.writeFileSync("./package.json", JSON.stringify(json));
} catch (err) {
  console.error(err);
}
