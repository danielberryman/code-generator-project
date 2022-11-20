const mainTsx = {
  imports: `import u$compNames from './pages/u$compNames/u$compNames';
    import Createu$compNames from "./pages/u$compNames/Createu$compName";
    // nextImport`,
  children: `{
            path: '$compNames',
            element: (<RequireAuth><u$compNames /></RequireAuth>),
            children: [
                {
                  path: "create",
                  element: <Createu$compName />,
                }
            ]
        },
        // nextChild`,
};

const job = {
  name: "react-add-nav-collection",
  instructions: [
    {
      type: "e",
      command:
        "mkdir /Users/danielberryman/Code/apps/$appName/client/src/pages/u$compNames",
    },
    {
      type: "e",
      command:
        'plop --plopfile ~/Code/db-plop/generators/react/react-add-collection.js "$compName"',
    },
    {
      type: "e",
      command:
        "mv ~/Code/db-plop/output/react/* /Users/danielberryman/Code/apps/$appName/client/src/pages/u$compNames",
    },
    {
      name: "add import for child route page component",
      type: "i",
      key: "// nextImport",
      content: mainTsx.imports,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      name: "add child route to router",
      type: "i",
      key: "// nextChild",
      content: mainTsx.children,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      name: "add link in Nav component",
      type: "i",
      key: "{/* nextAuthLink */}",
      content:
        '<Link className={styles.item} to="/$compNames">$compNames</Link>\n{/* nextAuthLink */}',
      files: [
        "/Users/danielberryman/Code/apps/$appName/client/src/components/Nav/Nav.tsx",
      ],
    },
    {
      type: "e",
      command:
        "cd /Users/danielberryman/Code/apps/$appName/client && node ~/Code/db-plop/scripts/react/add-resource-interface.js $compName",
    },
    {
      type: "e",
      command:
        "cd /Users/danielberryman/Code/apps/$appName/client && node ~/Code/db-plop/scripts/react/generate-create-page-fields.js $compName",
    },
    {
      type: "e",
      command:
        "cd /Users/danielberryman/Code/apps/$appName/client && npx prettier --write .",
    },
  ],
};

module.exports = { job };
