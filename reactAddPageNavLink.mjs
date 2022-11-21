import runInstructions from "./instructions.mjs";
import instructions from "./instructions/react/setup/vite.mjs";
import { routerCallback, routerPrompt } from "./reactRouter.mjs";

export const addPageNavLinkPrompt = [
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

export async function addPageNavLinkCallback(input, config) {
  switch (input.setup) {
    case "vite":
      await runInstructions(instructions, { appName: input.appName });
      config.appName = input.appName;
      const next = {
        prompt: routerPrompt,
        callback: routerCallback,
        config,
      };
      return next;
    default:
      throw new Error("Framework is required.");
  }
}
