module.exports = (plop) => {
  plop.setGenerator("react-vite-setup", {
    description:
      "Replace app.tsx and main.tsx with custom refs for adding in things like routing, etc",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/App.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/template1/app-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/main.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/template1/main-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/index.css`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/template1/index-css.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/App.css`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/template1/app-css.hbs`,
      },
    ],
  });
};
