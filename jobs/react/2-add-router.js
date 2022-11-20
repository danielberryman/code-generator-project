const { reactRouter } = require(`./shared/routers/react-router`);

// check router argument passed to the job and based on that grab the correct instructions
const routerName = process.argv[2];

let name = "";
let instructions = [];

switch (routerName) {
  default:
    name = reactRouter.name;
    instructions = reactRouter.instructions;
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
