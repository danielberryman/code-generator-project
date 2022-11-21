import dotenv from "dotenv";
dotenv.config();

const instructions = [
  {
    name: "Making base app directory",
    type: "e",
    command: `mkdir ${process.env.BASE_URL}/$appName`,
  },
  {
    name: "Calling npm create vite",
    type: "e",
    command: `cd ${process.env.BASE_URL}/$appName && npm create vite@latest client -- --template react-ts`,
  },
  {
    name: "Creating directory structure",
    type: "e",
    command: `cd ${process.env.BASE_URL}/$appName/client/src && mkdir pages && mkdir components && mkdir services && mkdir utils && mkdir interfaces`,
  },
  {
    name: "Generating main.tsx and App.tsx via plop templates",
    type: "e",
    command:
      "plop --plopfile ~/Code/db-plop/generators/react/react-vite-setup.js",
  },
  {
    name: "Replacing main.tsx and App.tsx with plop generated files",
    type: "e",
    command: `mv ~/Code/db-plop/output/react/* ${process.env.BASE_URL}/$appName/client/src`,
  },
  {
    name: "npm i",
    type: "e",
    command: `cd ${process.env.BASE_URL}/$appName/client && npm i react-bootstrap bootstrap bootstrap-icons`,
  },
  {
    name: "Open app dir in code editor",
    type: "e",
    command: `code ${process.env.BASE_URL}/$appName`,
  },
  // {
  //   type: "e",
  //   command: `cd ${process.env.BASE_URL}/$appName && npx prettier --write .`,
  // },
];

export default { instructions, requirements: ["appName"] };
