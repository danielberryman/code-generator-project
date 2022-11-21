export default (plop) => {
  plop.setGenerator("left-nav-w-react-router", {
    description: "Create nav files for left-styled navbar using react-router",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Nav.tsx`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/nav/react-router/left-tsx.hbs`,
      },
      {
        type: "add",
        path: `${process.env.HOME}/Code/db-plop/output/react/Nav.module.css`,
        templateFile: `${process.env.HOME}/Code/db-plop/templates/react/nav/react-router/left-css.hbs`,
      },
    ],
  });
};
