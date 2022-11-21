import inquirer from "inquirer";
import { setupCallback, setupPrompt } from "./reactSetup.mjs";

const initPrompt = [
  {
    name: "technology",
    message: "What base technology would you like to use for this project?",
    type: "list",
    choices: ["react", "node"],
  },
];

function initCallback(input, config) {
  switch (input.technology) {
    case "react":
      const next = {
        prompt: setupPrompt,
        callback: setupCallback,
        config,
      };
      return next;
    case "node":
      break;
    default:
      throw new Error("Technology input is reuqired.");
  }
}

function run(prompt, callback, config) {
  inquirer.prompt(prompt).then(async (input) => {
    const next = await callback(input, config);
    if (next && next.prompt && next.callback && next.config) {
      run(next.prompt, next.callback, next.config);
    }
  });
}

run(initPrompt, initCallback, {});
