const fs = require('fs');

const newText = 
  "declare global {\n" +
  "  namespace NodeJS {\n" +
  "    interface ProcessEnv {\n" +
  "      NODE_ENV: 'development' | 'production';\n" +
  "      PORT?: string;\n" +
  "      PWD: string;\n" +
  "      TOKEN_SECRET: string;\n" +
  "      SALT_ROUNDS: number;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "// If this file has no import/export statements (i.e. is a script)\n" +
  "// convert it into a module by adding an empty export statement.\n" +
  "export {};\n";

try {
  fs.writeFileSync('./environment.d.ts', newText)
} catch (err) {
  console.error(err);
}
