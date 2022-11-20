import runInstructions from "./instructions.mjs";
import instructions from "./instructions/react/setup/vite.mjs";

export const setupPrompt = [
  {
    name: "setup",
    message:
      "What framework do you want to use to get started with this react app?",
    type: "list",
    choices: ["vite", "create-react-app"],
  },
  {
    name: "appName",
    message: "What's the name of your app?",
    type: "input",
  },
];

export function setupCallback(input) {
  switch (input.setup) {
    case "vite":
      runInstructions(instructions, { appName: input.appName });
      break;
    default:
      throw new Error("Framework is required.");
  }
}
