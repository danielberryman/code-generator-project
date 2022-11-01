module.exports = plop => {
  plop.setGenerator('express-prisma-crud-api', {
    description: 'Create a reusable express prisma crud api',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your api or model name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../output/{{titleCase name}}Controller.ts',
        templateFile:
          '../templates/express/express-controller.hbs',
      },
      {
        type: 'append',
        path: '../output/{{dashCase name}}Controller.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: 'add',
        path: '../output/{{titleCase name}}Repository.ts',
        templateFile:
          '../templates/prisma/prisma-repository.hbs',
      },
      {
        type: 'append',
        path: '../output/{{dashCase name}}Repository.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: 'add',
        path: '../output/routes.ts',
        templateFile:
          '../templates/express/express-routes-crud.hbs',
      },
      {
        type: 'append',
        path: '../output/routes.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: 'add',
        path: '../output/model.ts',
        templateFile:
          '../templates/prisma/prisma-schema-model.hbs',
      },
      {
        type: 'append',
        path: '../output/model.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });
}