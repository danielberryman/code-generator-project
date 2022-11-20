import inquirer from "inquirer";
import { setupCallback, setupPrompt } from "./reactPrompts.mjs";

const initPrompt = [
  {
    name: "technology",
    message: "What base technology would you like to use for this project?",
    type: "list",
    choices: ["react", "node"],
  },
];

function initCallback(input) {
  switch (input.technology) {
    case "react":
      const next = {
        prompt: setupPrompt,
        callback: setupCallback,
      };
      return next;
    case "node":
      break;
    default:
      throw new Error("Technology input is reuqired.");
  }
}

function run(prompt, callback) {
  inquirer.prompt(prompt).then((input) => {
    const next = callback(input);
    if (next && next.prompt && next.callback) {
      run(next.prompt, next.callback);
    }
  });
}

run(initPrompt, initCallback);
