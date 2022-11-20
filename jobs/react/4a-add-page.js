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
      type: "e",
      command: "npx prettier --write .",
    },
  ],
};

module.exports = { job };
