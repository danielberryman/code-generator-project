module.exports = (plop) => {
  plop.setHelper("removeLastLetter", function (text) {
    return text.slice(0, -1);
  });
  plop.setHelper("removeLastLetterCap", function (text) {
    const result = text.charAt(0).toUpperCase() + text.slice(1, -1);
    return result;
  });
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
        path: `${process.env.HOME}/Code/db-plop/output/react/{{titleCase name}}s.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/collection-page-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/{{titleCase name}}s.module.css`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Create{{titleCase name}}.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-collection-create-page-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Create{{titleCase name}}.module.css`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/react-create-form-css.hbs`,
      },
    ],
  });
};
