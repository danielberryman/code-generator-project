module.exports = plop => {
  plop.setGenerator('react-router-nav-comp', {
    description: 'Create nav files for react-router setup',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/AuthContextType.ts`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-auth-context-type.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/AuthProvider.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-auth-provider.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/Login.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-auth-login.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/Logout.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-auth-logout.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/Register.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-auth-register.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/PasswordReset.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-auth-pw-reset.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/AccountSettings.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-account-settings.hbs`,
      },
    ],
  });
}