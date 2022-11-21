export default (plop) => {
  plop.setGenerator("top-nav-w-react-router", {
    description: "Create nav files for top-styled navbar using react-router",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Nav.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/nav/react-router/top-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Nav.module.css`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/nav/react-router/top-css.hbs`,
      },
    ],
  });
};
