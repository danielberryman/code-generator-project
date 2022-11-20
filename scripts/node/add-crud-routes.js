const fs = require("fs");
const { crudRoutesRef } = require("../../constants/express.js");

try {
  const routesBuffer = fs.readFileSync(
    `${process.env.HOME}/Code/db-plop/output/express/routes.ts`
  );
  const routesText = routesBuffer.toString();

  const mainBuffer = fs.readFileSync("./routes.ts");
  const text = mainBuffer.toString();
  const editedText = text.replace(crudRoutesRef, routesText);
  fs.writeFileSync("./routes.ts", editedText);
} catch (err) {
  console.error(err);
}
