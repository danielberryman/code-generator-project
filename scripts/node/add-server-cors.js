const fs = require('fs');
import { serverCors } from "../../constants/express";

try {
  const buffer = fs.readFileSync('./index.ts');
  const text = buffer.toString();
  const editedText = text.replace(serverCors.ref, serverCors.content);
  fs.writeFileSync('./index.ts', editedText)
} catch (err) {
  console.error(err);
}
