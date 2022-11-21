import dotenv from "dotenv";
dotenv.config();

const mainTsxImports = `
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
`;

const mainTsxRouter = "<RouterProvider router={router} />";

const appTsxImports = `
    import { Outlet } from 'react-router-dom';\n
    // nextImport
`;

const appTsxOutlet = `
    {/* nav */}
    \n<main className="main-container">\n
        <Outlet />\n
    </main>\n
    {/* nextTag */}
`;

const instructions = [
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
    files: [`${process.env.BASE_URL}/$appName/client/src/main.tsx`],
  },
  {
    name: "main.tsx update render component",
    type: "i",
    key: "{/* router */}",
    content: mainTsxRouter,
    files: [`${process.env.BASE_URL}/$appName/client/src/main.tsx`],
  },
  {
    name: "App.tsx update 1",
    type: "i",
    key: "// nextImport",
    content: appTsxImports,
    files: [`${process.env.BASE_URL}/$appName/client/src/App.tsx`],
  },
  {
    name: "App.tsx update 2",
    type: "i",
    key: "{/* nextTag */}",
    content: appTsxOutlet,
    files: [`${process.env.BASE_URL}/$appName/client/src/App.tsx`],
  },
  {
    type: "e",
    command: `cd ${process.env.BASE_URL}/$appName && npx prettier --write .`,
  },
];

export default { instructions, requirements: ["appName"] };
