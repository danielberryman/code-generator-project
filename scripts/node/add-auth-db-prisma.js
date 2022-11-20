const fs = require("fs");
const { authDbPrismaContent } = require("../../constants/prisma.js");

try {
  const buffer = fs.readFileSync("./prisma/schema.prisma");
  const text = buffer.toString();
  fs.writeFileSync("./prisma/schema.prisma", text + authDbPrismaContent);
} catch (err) {
  console.error(err);
}
