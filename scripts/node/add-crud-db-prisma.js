const fs = require('fs');

try {
  const modelBuffer = fs.readFileSync(`${process.env.HOME}/Code/db-plop/output/express/model.ts`);
  const modelText = modelBuffer.toString();

  const mainBuffer = fs.readFileSync('./prisma/schema.prisma');
  const text = mainBuffer.toString();
  fs.writeFileSync('./prisma/schema.prisma', text + modelText)
} catch (err) {
  console.error(err);
}