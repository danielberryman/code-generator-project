module.exports = (plop) => {
  plop.setGenerator("react-router-nav-comp", {
    description: "Create nav files for react-router setup",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What do you want your page to be called?",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/{{titleCase name}}.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/base-page-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/{{titleCase name}}.module.css`,
      },
    ],
  });
};
