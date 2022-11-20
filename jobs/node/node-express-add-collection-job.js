const job = {
  name: "react-add-collection",
  instructions: [
    {
      type: "e",
      command:
        'plop --plopfile ~/Code/db-plop/generators/express/express-prisma-crud-api.js "$compName"',
    },
    {
      type: "e",
      command: "mv ~/Code/db-plop/output/express/*Controller.ts ./controllers",
    },
    {
      type: "e",
      command: "mv ~/Code/db-plop/output/express/*Repository.ts ./repositories",
    },
    {
      type: "e",
      command:
        "node ~/Code/db-plop/scripts/node/generate-prisma-model-controller.js $compName",
    },
    {
      type: "e",
      command:
        "node ~/Code/db-plop/scripts/node/generate-prisma-model-repository.js $compName",
    },
    {
      type: "e",
      command: "node ~/Code/db-plop/scripts/node/add-crud-routes.js",
    },
    {
      type: "e",
      command: "rm ~/Code/db-plop/output/express/routes.ts",
    },
    {
      type: "e",
      command:
        "node ~/Code/db-plop/scripts/node/generate-prisma-model.js $compName",
    },
    {
      type: "e",
      command: "npx prisma db push",
    },
    {
      type: "e",
      command: "npx prisma generate",
    },
    {
      type: "e",
      command: "npx prettier --write .",
    },
  ],
};

module.exports = { job };
