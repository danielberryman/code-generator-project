import dotenv from "dotenv";
dotenv.config();

const nextLink = `<Link className={styles.item} to=\"/$componentName\">$componentName</Link>
            {/* nextLink */}`;

const nextImport =
  "import u$componentName from './pages/u$componentName/u$componentName';\n// nextImport";

const nextChild = `{
                path: '$componentName',
                element: <u$componentName />,
            },
            // nextChild`;

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
        `mkdir ${process.env.BASE_URL}/$appName/client/src/pages/u$componentName`,
    },
    {
      name: "mv generated page into pages dir",
      type: "e",
      command:
        `mv ~/Code/db-plop/output/react/* ${process.env.BASE_URL}/$appName/client/src/pages/u$componentName`,
    },
    {
      name: "add link to page in Nav component",
      type: "i",
      key: "{/* nextLink */}",
      content: nextLink,
      files: [
        `${process.env.BASE_URL}/$appName/client/src/components/Nav/Nav.tsx`,
      ],
    },
    {
      name: "add import for child route page component",
      type: "i",
      key: "// nextImport",
      content: nextImport,
      files: [`${process.env.BASE_URL}/$appName/client/src/main.tsx`],
    },
    {
      name: "add child route to router",
      type: "i",
      key: "// nextChild",
      content: nextChild,
      files: [`${process.env.BASE_URL}/$appName/client/src/main.tsx`],
    },
    {
      type: "e",
      command: `cd ${process.env.BASE_URL}/$appName/client && npx prettier --write .`,
    },
];

export default { instructions, requirements: ["appName", "componentName"] };
