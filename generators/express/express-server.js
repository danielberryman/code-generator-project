module.exports = plop => {
  plop.setGenerator('express-server', {
    description: 'Create a reusable express server',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/express/index.ts`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/express/express-server.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/express/routes.ts`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/express/express-routes.hbs`,
      }
    ],
  });
}