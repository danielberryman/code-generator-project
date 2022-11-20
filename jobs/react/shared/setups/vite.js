const cdApp = `cd ${process.env.BASE_URL}/$appName`;
const cdClient = `cd ${process.env.BASE_URL}/$appName/client`;
const cdSrc = `cd ${process.env.BASE_URL}/$appName/client/src`;

const vite = {
  name: "vite",
  instructions: [
    {
      name: "Init vite with react-ts template",
      type: "e",
      command: `${cdApp} && npm create vite@latest client -- --template react-ts`,
    },
    {
      name: "create react directory structure",
      type: "e",
      command: `${cdSrc} && mkdir pages && mkdir components && mkdir services && mkdir utils && mkdir interfaces`,
    },
    {
      name: "generate main.tsx and App.tsx with plop templates",
      type: "e",
      command:
        "plop --plopfile ~/Code/db-plop/generators/react/react-vite-setup.js",
    },
    {
      name: "replace main.tsx and App.tsx with plop generated files",
      type: "e",
      command:
        "mv ~/Code/db-plop/output/react/* ~/Code/apps/$appName/client/src",
    },
    {
      name: "npm i",
      type: "e",
      command: `${cdClient} && npm i react-bootstrap bootstrap bootstrap-icons`,
    },
    {
      name: "Open app dir in code editor",
      type: "e",
      command: `code ${cdApp}`,
    },
  ],
};

module.exports = {
  vite,
};
