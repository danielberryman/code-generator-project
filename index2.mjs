import inquirer from "inquirer";
import { setupPrompt, setupCallback } from "./reactSetup.mjs";
import { addPagePrompt, addPageCallback } from "./reactAddPage.mjs";
import {
  addPageNavLinkPrompt,
  addPageNavLinkCallback,
} from "./reactAddPageNavLink.mjs";

const initPrompt = [
  {
    name: "job",
    message: "What do you want to do?",
    type: "list",
    choices: ["New Project", "Add Page", "Add Page + Nav Link"],
  },
];

function initCallback(input, config) {
  let next;

  switch (input.job) {
    case "New Project":
      next = {
        prompt: setupPrompt,
        callback: setupCallback,
        config,
      };
      return next;
    case "Add Page":
      next = {
        prompt: addPagePrompt,
        callback: addPageCallback,
        config,
      };
      return next;
    case "Add Page + Nav Link":
      next = {
        prompt: addPageNavLinkPrompt,
        callback: addPageNavLinkCallback,
        config,
      };
      return next;
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
