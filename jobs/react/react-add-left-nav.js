const nextLink = `<Link className={styles.item} to=\"/$compName\">$compName</Link>
            {/* nextLink */}`;

const nextImport =
  "import u$compName from './pages/u$compName/u$compName';\n// nextImport";

const nextChild = `{
                path: '$compName',
                element: <u$compName />,
            },
            // nextChild`;

const job = {
  name: "react-add-page",
  instructions: [
    {
      name: "generate plop file for new react page",
      type: "e",
      command:
        'plop --plopfile ~/Code/db-plop/generators/react/react-add-page.js "$compName"',
    },
    {
      name: "mkdir for page component",
      type: "e",
      command:
        "mkdir /Users/danielberryman/Code/apps/$appName/client/src/pages/u$compName",
    },
    {
      name: "mv generated page into pages dir",
      type: "e",
      command:
        "mv ~/Code/db-plop/output/react/* /Users/danielberryman/Code/apps/$appName/client/src/pages/u$compName",
    },
    {
      name: "add link to page in Nav component",
      type: "i",
      key: "{/* nextLink */}",
      content: nextLink,
      files: [
        "/Users/danielberryman/Code/apps/$appName/client/src/components/Nav/Nav.tsx",
      ],
    },
    {
      name: "add import for child route page component",
      type: "i",
      key: "// nextImport",
      content: nextImport,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      name: "add child route to router",
      type: "i",
      key: "// nextChild",
      content: nextChild,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      type: "e",
      command: "npx prettier --write .",
    },
  ],
};

module.exports = { job };
