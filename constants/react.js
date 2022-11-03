const reactRouterMain = {
    ref1: /\/\/ routing1/,
    content1:
        "import {\n" +
        "   createBrowserRouter,\n" +
        "   RouterProvider,\n" +
        "} from 'react-router-dom';\n" +
        "\n" +
        "const router = createBrowserRouter([\n" +
        "   {\n" +
        "     path: '/',\n" +
        "     element: <App />,\n" +
        "     // children: [\n" +
        "     //   {\n" +
        "     //     path: 'fake',\n" +
        "     //     element: <Fake />,\n" +
        "     //   }\n" +
        "     // ]\n" +
        "   }\n" +
        " ]);",
    ref2: /\{\/\* routing2 \*\/\}/,
    content2: "<RouterProvider router={router} />",
}

const reactRouterApp = {
    ref1: /\/\/ routing1/,
    content1: "import { Outlet } from 'react-router-dom';",
    ref2: /\{\/\* routing2 \*\/\}/,
    content2: "<Outlet />"
}

const reactCustomAuthNav = {
    ref1: /\/\/ auth1/,
    content1:
        "import { useAuth } from '../Auth/AuthProvider';\n" +
        "import Logout from '../Auth/Logout';",
    ref2: /\/\/ auth2/,
    content2: "const auth = useAuth();",
    ref3: /\{\/\* auth3 \*\/\}/,
    content3:
        "{auth.userIsLoggedIn ? (\n" +
        "    <>\n" +
        "        <Link className={styles.item} to=\"/account-settings\">account settings</Link>\n" +
        "        <Link className={styles.item} to=\"/logout\">logout</Link>\n" +
        "    </>\n" +
        ") : (\n" +
        "    <>\n" +
        "        <Link className={styles.item} to=\"/signup\">signup</Link>\n" +
        "        <Link className={styles.item} to=\"/login\">login</Link>\n" +
        "    </>\n" +
        ")}"
}

module.exports = {
    reactRouterMain,
    reactRouterApp,
    reactCustomAuthNav
}