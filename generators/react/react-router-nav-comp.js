module.exports = plop => {
  plop.setGenerator('react-router-nav-comp', {
    description: 'Create nav files for react-router setup',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/Nav.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-router-navtsx.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/Nav.module.css`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/react-router-navcss.hbs`,
      },
    ],
  });
}