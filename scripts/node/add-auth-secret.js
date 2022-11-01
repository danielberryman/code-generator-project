const fs = require('fs');
import { authSecretContent } from "../constants/express";

try {
  const buffer = fs.readFileSync('./.env');
  const text = buffer.toString();
  fs.writeFileSync('./.env', text + authSecretContent);
} catch (err) {
  console.error(err);
}
