import inquirer from "inquirer";

const prompt = [
  {
    name: "technology",
    message: "What base technology would you like to use for this project?",
    type: "list",
    choices: ["react", "node"],
  },
];

const callback = function (input) {
  // query react jobs
  const jobs = getJobsByTech(Object.values(input)[0]);

  // iterate through

  //
  doStep();
};

function doStep() {
  inquirer.prompt(prompt).then(callback);
}

doStep();
