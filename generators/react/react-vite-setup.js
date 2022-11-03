module.exports = plop => {
  plop.setGenerator('react-vite-setup', {
    description: 'Replace app.tsx and main.tsx with custom refs for adding in things like routing, etc',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/App.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/base-apptsx.hbs`,
      },
      {
        type: 'add',
        path: `${process.env.HOME}/Code/db-plop/output/react/main.tsx`,
        templateFile:
          `${process.env.HOME}/Code/db-plop/templates/react/base-maintsx.hbs`,
      },
    ],
  });
}