module.exports = (plop) => {
  plop.setGenerator("express-prisma-crud-api", {
    description: "Create a reusable express prisma crud api",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your api or model name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/{{titleCase name}}Controller.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-controller.hbs`,
      },
      {
        type: "append",
        path: `${process.env.HOME}/Code/db-plop/output/express/{{dashCase name}}Controller.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/{{titleCase name}}Repository.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/prisma/prisma-repository.hbs`,
      },
      {
        type: "append",
        path: `${process.env.HOME}/Code/db-plop/output/express/{{dashCase name}}Repository.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/express/routes.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/express/express-routes-crud.hbs`,
      },
      {
        type: "append",
        path: `${process.env.HOME}/Code/db-plop/output/express/routes.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });
};
