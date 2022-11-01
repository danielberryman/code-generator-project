const fs = require('fs');
import { authRoutes } from "../constants/express";

try {
  const buffer = fs.readFileSync('./routes.ts');
  const text = buffer.toString();
  const editedText = text.replace(authRoutes.ref, authRoutes.content);
  fs.writeFileSync('./routes.ts', editedText);
} catch (err) {
  console.error(err);
}
