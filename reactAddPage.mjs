import runInstructions from "./instructions.mjs";
import instructions from "./instructions/react/add-page/add-page.mjs";

export const addPagePrompt = [
  {
    name: "appName",
    message: "What's the app name you want to add a page to?",
    type: "input",
  },
  {
    name: "componentName",
    message: "What's the name of the new page?",
    type: "input",
  },
];

export async function addPageCallback(input) {
  await runInstructions(instructions, input);
}
