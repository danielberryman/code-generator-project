const nav1Top = require(`./template1/navbar`);

// check router argument passed to the job and based on that grab the correct instructions
const navNumber = process.argv[2];

let name = "";
let instructions = [
  {
    type: "e",
    command:
      "mkdir /Users/danielberryman/Code/apps/$appName/client/src/components/Nav",
  },
  {
    type: "e",
    command: "plop --plopfile ~/Code/db-plop/generators/react/nav-top.js",
  },
  {
    type: "e",
    command:
      "mv ~/Code/db-plop/output/react/* /Users/danielberryman/Code/apps/$appName/client/src/components/Nav",
  },
];

switch (navNumber) {
  default:
    name = nav1Top.name;
    instructions = nav1Top.instructions;
}

const job = {
  name,
  instructions: [
    ...instructions,
    {
      type: "e",
      command: "npx prettier --write .",
    },
  ],
};

module.exports = { job };
