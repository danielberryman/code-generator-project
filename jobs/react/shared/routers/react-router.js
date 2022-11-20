const npmInstallsCmd = "npm i react-router-dom";

const mainTsxImports = {
  key: "// nextImport",
  contents: `
        import {
            createBrowserRouter,
            RouterProvider,
        } from 'react-router-dom';
        // nextImport"

        const router = createBrowserRouter([
            {
                path: '/',
                element: <App />,
                children: [
                    // nextChild
                ]
            }
        ]);
    `,
};

const mainTsxRouter = {
  key: "{/* router */}",
  content: "<RouterProvider router={router} />",
};

const appTsxImports = {
  key: "// nextImport",
  content: `
        import { Outlet } from 'react-router-dom';\n
        // nextImport
    `,
};

const appTsxOutlet = {
  key: "{/* nextTag */}",
  content: `
        \n<main className="main-container">\n
            <Outlet />\n
        </main>\n
        {/* nextTag */}
    `,
};

const reactRouter = {
  name: "react-router",
  instructions: [
    {
      name: "install react-router package",
      type: "e",
      command: "npm i react-router-dom",
    },
    {
      name: "main.tsx update import",
      type: "i",
      key: "// nextImport",
      content: mainTsxImports,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      name: "main.tsx update render component",
      type: "i",
      key: "{/* router */}",
      content: mainTsxRouter,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      name: "App.tsx update 1",
      type: "i",
      key: "// nextImport",
      content: appTsxImports,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/App.tsx"],
    },
    {
      name: "App.tsx update 2",
      type: "i",
      key: "{/* nextTag */}",
      content: appTsxOutlet,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/App.tsx"],
    },
  ],
};

modules.exports = {
  reactRouter,
};
