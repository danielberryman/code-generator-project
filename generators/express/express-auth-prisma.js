module.exports = (plop) => {
  plop.setGenerator("express-prisma-crud-api", {
    description: "Create a reusable express prisma crud api",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/AuthController.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-auth-controller.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/AuthService.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-auth-service.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/EmailService.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-auth-email-service.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/UserRepository.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-auth-prisma-repository.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/TokenPayload.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-auth-token-payload-interface.hbs`,
      },
    ],
  });
};
