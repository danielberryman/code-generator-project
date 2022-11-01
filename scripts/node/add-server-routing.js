const fs = require('fs');
import { serverRouting } from "../../constants/express";

try {
  const buffer = fs.readFileSync('./index.ts');
  const text = buffer.toString();
  const editedText = text.replace(serverRouting.ref, serverRouting.content);
  fs.writeFileSync('./index.ts', editedText)
} catch (err) {
  console.error(err);
}
