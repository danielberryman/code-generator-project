import runInstructions from "./instructions.mjs";
import instructions from "./instructions/react/routing/react-router.mjs";
import { navPrompt, navCallback } from "./reactNav.mjs";

export const routerPrompt = [
  {
    name: "router",
    message:
      "What router do you want to use?",
    type: "list",
    choices: ["react-router"],
  },
];

export async function routerCallback(input, config) {
  switch (input.router) {
    case "react-router":
      await runInstructions(instructions, config);
      const next = {
        prompt: navPrompt,
        callback: navCallback,
        config
      };
      return next;
      // break;
    default:
      throw new Error("Framework is required.");
  }
}
