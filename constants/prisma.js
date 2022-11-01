const authDbPrismaContent =
    "\nmodel User {\n" +
    "  id            String    @id @default(cuid())\n" +
    "  name          String?\n" +
    "  email         String    @unique\n" +
    "  emailVerified DateTime? @map(\"email_verified\")\n" +
    "  password      String\n" +
    "  resetToken    String?\n" +
    "  createdAt     DateTime  @default(now()) @map(name: \"created_at\")\n" +
    "  updatedAt     DateTime  @updatedAt @map(name: \"updated_at\")\n" +
    "  // role          Role      @default(USER)\n" +
    "\n" +
    "  @@map(name: \"users\")\n" +
    "}\n" +
    "\n" +
    "// NOTE: sqlite doesn't support enums\n" +
    "// enum Role {\n" +
    "//   USER\n" +
    "//   ADMIN\n" +
    "// }\n";

module.exports = {
    authDbPrismaContent
}
