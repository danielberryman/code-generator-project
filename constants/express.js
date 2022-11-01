// refs
const crudRoutesRef = /\/\/routes/;

// contents
const authSecretContent = "\nTOKEN_SECRET=secret\n";
const npmScriptsContent = {
    dev: "nodemon ./dist/index.js",
    tsc: "npx tsc -w",
};
const authConstantsContent =
    "\n// auth\n" +
    "const TOKEN_STR = \"token\";\n" +
    "const TOKEN_EXP_1H = \"1hr\";\n" +
    "const TOKEN_EXP_5M = \"5m\";\n";

// ref/content pairs
const authRoutes = {
    ref: /\/\/auth/,
    content:
        "// Auth\n" +
        "import authController from './controllers/AuthController';\n" +
        "router.use('*', authController.validateToken);\n" +
        "router.post('/api/register', authController.register);\n" +
        "router.post('/api/login', authController.login);\n" +
        "router.post('/api/logout', authController.logout);\n" +
        "router.post('/api/password-reset-request', authController.passwordResetRequest);\n" +
        "router.post('/api/password-reset', authController.passwordReset);"
}

const serverAuth = {
    ref: /\/\/auth/,
    content:
        "// Auth\n" +
        "import cookieParser from 'cookie-parser';\n" +
        "app.use(cookieParser());"
}

const serverCors = {
    ref: /\/\/cors/,
    content:
        "// Cors\n" +
        "// import cors from 'cors';\n" +
        "// app.use(\n" +
        "//   cors({\n" +
        "//     origin: process.env.CLIENT_URL,\n" +
        "//     credentials: true,\n" +
        "//   })\n" +
        "// );"
}

const serverDbPrisma = {
    ref: /\/\/database/,
    content:
        "// Database\n" +
        "import { PrismaClient } from '@prisma/client';\n" +
        "const prisma = new PrismaClient();"
}

const serverRouting = {
    ref: /\/\/routing/,
    content:
        "// Routing\n" +
        "import routes from './routes';\n" +
        "app.use(routes);"
}

const tscOutdir = {
    ref: /\/\/ "outDir": ".\/",/,
    content: "\"outDir\": \"./dist\","
}

module.exports = {
    crudRoutesRef,
    authSecretContent,
    npmScriptsContent,
    authConstantsContent,
    authRoutes,
    serverAuth,
    serverCors,
    serverDbPrisma,
    serverRouting,
    tscOutdir
}
