import dotenv from "dotenv";
dotenv.config();

const instructions = [
  {
    type: "e",
    command:
      `mkdir ${process.env.BASE_URL}/$appName/client/src/components/Nav`,
  },
  {
    type: "e",
    command: `plop --plopfile ~/Code/db-plop/generators/react/react-router-nav-top.js`,
  },
  {
    type: "e",
    command:
      `mv ~/Code/db-plop/output/react/* ${process.env.BASE_URL}/$appName/client/src/components/Nav`,
  },
  {
    name: "add child route to router",
    type: "i",
    key: "// nextImport",
    content: "import Nav from './components/Nav/Nav'\n// nextImport",
    files: [`${process.env.BASE_URL}/$appName/client/src/App.tsx`],
  },
  {
    name: "add child route to router",
    type: "i",
    key: "{/* nav */}",
    content: "<Nav />",
    files: [`${process.env.BASE_URL}/$appName/client/src/App.tsx`],
  }
];

export default { instructions, requirements: ["appName"] };
