module.exports = (plop) => {
  plop.setGenerator("react-router-nav-comp", {
    description: "Create nav files for react-router setup",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Login/Login.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-login.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Login/Login.module.css`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Logout/Logout.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-logout.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Logout/Logout.module.css`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Register/Register.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-register.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Register/Register.module.css`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/PasswordReset/PasswordReset.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-pw-reset.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/PasswordReset/PasswordReset.module.css`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/PasswordResetRequest/PasswordResetRequest.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-pw-reset-request.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/PasswordResetRequest/PasswordResetRequest.module.css`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/AccountSettings/AccountSettings.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-account-settings.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/AccountSettings/AccountSettings.module.css`,
      },
    ],
  });
};
