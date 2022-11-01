const fs = require('fs');
import { crudRoutesRef } from "../constants/express";

try {
  const routesBuffer = fs.readFileSync('../plop/output/express/routes.ts');
  const routesText = routesBuffer.toString();

  const mainBuffer = fs.readFileSync('./routes.ts');
  const text = mainBuffer.toString();
  const editedText = text.replace(crudRoutesRef, routesText);
  fs.writeFileSync('./routes.ts', editedText)
} catch (err) {
  console.error(err);
}
