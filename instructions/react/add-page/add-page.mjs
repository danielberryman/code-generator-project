import dotenv from "dotenv";
dotenv.config();

const instructions = [
  {
    name: "generate plop file for new react page",
    type: "e",
    command:
      'plop --plopfile ~/Code/db-plop/generators/react/react-add-page.js "$componentName"',
  },
  {
    name: "mkdir for page component",
    type: "e",
    command:
      "mkdir /Users/danielberryman/Code/apps/$appName/client/src/pages/u$componentName",
  },
  {
    name: "mv generated page into pages dir",
    type: "e",
    command: `mv ~/Code/db-plop/output/react/* ${process.env.BASE_URL}/$appName/client/src/pages/u$componentName`,
  },
  {
    type: "e",
    command: `cd ${process.env.BASE_URL}/$appName/client && npx prettier --write .`,
  },
];

export default { instructions, requirements: ["appName", "componentName"] };
