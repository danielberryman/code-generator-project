module.exports = plop => {
  plop.setGenerator('express-prisma-crud-api', {
    description: 'Create a reusable express prisma crud api',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: '../output/AuthController.ts',
        templateFile:
          '../templates/express/express-auth-controller.hbs',
      },
      {
        type: 'add',
        path: '../output/AuthService.ts',
        templateFile:
          '../templates/express/express-auth-service.hbs',
      },
      {
        type: 'add',
        path: '../output/EmailService.ts',
        templateFile:
          '../templates/express/express-auth-email-service.hbs',
      },
      {
        type: 'add',
        path: '../output/UserRepository.ts',
        templateFile:
          '../templates/express/express-auth-prisma-repository.hbs',
      },
      {
        type: 'add',
        path: '../output/TokenPayload.ts',
        templateFile:
          '../templates/express/express-auth-token-payload-interface.hbs',
      },
    ],
  });
}