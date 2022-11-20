module.exports = (plop) => {
  plop.setGenerator("react-router-nav-comp", {
    description: "Create nav files for react-router setup",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/AuthContextType.ts`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-context-type.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/AuthProvider.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-auth-provider.hbs`,
      },
    ],
  });
};
