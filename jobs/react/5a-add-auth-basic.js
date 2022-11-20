const tempNum = process.argv[3];

const navCompTemp1 = {
  imports:
    "import { useAuth } from '../Auth/AuthProvider';\nimport Logout from '../Logout/Logout';\n// nextImport",
  vars: `const auth = useAuth()
        // nextVar`,
  links: `{auth && auth.userIsLoggedIn ? (
                <>
                    Welcome back, {auth.user.name}!
                    <Link className={styles.item} to=\"/account-settings\">account settings</Link>
                    {/* nextAuthLink */}
                    <Logout />
                </>
            ) : (
                <>
                    <Link className={styles.item} to=\"/register\">register</Link>
                    <Link className={styles.item} to=\"/login\">login</Link>
                    {/* nextLink */}
                </>
            )}`,
};

const navCompTemp2 = {
  imports:
    "import { useAuth } from '../Auth/AuthProvider';\nimport Logout from '../Logout/Logout';\n// nextImport",
  vars: `const auth = useAuth()
        // nextVar`,
  links: `{auth && auth.userIsLoggedIn ? (
                <>
                    Welcome back, {auth.user.name}!
                    <Link className={styles.item} to=\"/account-settings\">account settings</Link>
                    {/* nextAuthLink */}
                    <Logout />
                </>
            ) : (
                <>
                    <Link className={styles.item} to=\"/register\">register</Link>
                    <Link className={styles.item} to=\"/login\">login</Link>
                    {/* nextLink */}
                </>
            )}`,
};

const navComp = tempNum === 1 ? navCompTemp1 : navCompTemp2;

const mainTsx = {
  imports: `import { AuthProvider, RequireAuth, RequireUnauth } from './components/Auth/AuthProvider';
    import Login from './pages/Login/Login';
    import Register from './pages/Register/Register';
    import PasswordReset from './pages/PasswordReset/PasswordReset';
    import PasswordResetRequest from './pages/PasswordResetRequest/PasswordResetRequest';
    import AccountSettings from './pages/AccountSettings/AccountSettings';
    // nextImport`,
  children: `{
            path: 'login',
            element: (
                <RequireUnauth>
                  <Login />
                </RequireUnauth>
              ),
        },
        {
            path: 'register',
            element: <Register />,
        },
        {
            path: 'password-reset',
            element: <PasswordReset />,
        },
        {
            path: 'password-reset-request',
            element: <PasswordResetRequest />,
        },
        {
            path: 'account-settings',
            element: (<RequireAuth><AccountSettings /></RequireAuth>)
        },
        // nextChild`,
  topAuthProviderTag: `<React.StrictMode>
        <AuthProvider>`,
  bottomAuthProviderTag: `    </AuthProvider>
    </React.StrictMode>`,
};

const appTsx = {
  imports:
    "import { useAuth } from './components/Auth/AuthProvider';\nimport { useEffect } from 'react';\n// nextImport",
  vars: `const auth = useAuth();

    useEffect(() => {
      const url = "http://localhost:4000/api/getUserInfo";
      fetch(url, {
        method: "GET",
        credentials: 'include'
      }).then(res => {
        if (res.status === 200) {
          return res.json();
        }
      }).then(jsonRes => {
        if (jsonRes) {
            auth.login(jsonRes)
        }
        // navigate(from, { replace: true });
      }).catch(error => {
        console.error('Error:', error)
      })
    }, []);
    // nextVar`,
};

const job = {
  name: "react-auth-setup",
  instructions: [
    {
      name: "generate files for Auth component",
      type: "e",
      command:
        "plop --plopfile ~/Code/db-plop/generators/react/react-basic-auth.js",
    },
    {
      name: "mkdir for page component",
      type: "e",
      command:
        "mkdir /Users/danielberryman/Code/apps/$appName/client/src/components/Auth",
    },
    {
      name: "mv generated page into pages dir",
      type: "e",
      command:
        "mv ~/Code/db-plop/output/react/* /Users/danielberryman/Code/apps/$appName/client/src/components/Auth",
    },
    {
      name: "generate files for Auth component",
      type: "e",
      command:
        "plop --plopfile ~/Code/db-plop/generators/react/react-basic-auth-pages.js",
    },
    {
      name: "mv generated page into pages dir",
      type: "e",
      command:
        "cp -R ~/Code/db-plop/output/react/Logout /Users/danielberryman/Code/apps/$appName/client/src/components/",
    },
    {
      name: "mv generated page into pages dir",
      type: "e",
      command:
        "cp -R ~/Code/db-plop/output/react/* /Users/danielberryman/Code/apps/$appName/client/src/pages/ && rm -R ~/Code/db-plop/output/react/*",
    },
    {
      name: "add auth links in Nav component",
      type: "i",
      key: "{/* nextLink */}",
      content: navComp.links,
      files: [
        "/Users/danielberryman/Code/apps/$appName/client/src/components/Nav/Nav.tsx",
      ],
    },
    {
      name: "add imports for nav component",
      type: "i",
      key: "// nextImport",
      content: navComp.imports,
      files: [
        "/Users/danielberryman/Code/apps/$appName/client/src/components/Nav/Nav.tsx",
      ],
    },
    {
      name: "add imports for nav component",
      type: "i",
      key: "// nextVar",
      content: navComp.vars,
      files: [
        "/Users/danielberryman/Code/apps/$appName/client/src/components/Nav/Nav.tsx",
      ],
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
      name: "add imports for auth in App.tsx",
      type: "i",
      key: "// nextImport",
      content: appTsx.imports,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/App.tsx"],
    },
    {
      name: "add vars for auth in App.tsx",
      type: "i",
      key: "// nextVar",
      content: appTsx.vars,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/App.tsx"],
    },
    {
      name: "add top authProvider tag",
      type: "i",
      key: "<React.StrictMode>",
      content: mainTsx.topAuthProviderTag,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      name: "add bottom authProdiver tag",
      type: "i",
      key: "</React.StrictMode>",
      content: mainTsx.bottomAuthProviderTag,
      files: ["/Users/danielberryman/Code/apps/$appName/client/src/main.tsx"],
    },
    {
      type: "e",
      command: "npx prettier --write .",
    },
  ],
};

module.exports = { job };
