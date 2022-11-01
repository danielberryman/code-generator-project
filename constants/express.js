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
const authEnvironmentContent = "declare global {\n" +
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
    authEnvironmentContent,
    authRoutes,
    serverAuth,
    serverCors,
    serverDbPrisma,
    serverRouting,
    tscOutdir
}
