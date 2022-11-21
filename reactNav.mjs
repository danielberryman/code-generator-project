import runInstructions from "./instructions.mjs";
import topInstructions from "./instructions/react/nav/top.mjs";
// import leftInstructions from "./instructions/react/routing/react-router.mjs";

export const navPrompt = [
  {
    name: "nav",
    message: "What nav do you want to use?",
    type: "list",
    choices: ["top", "left"],
  },
];

export async function navCallback(input, config) {
  console.log(input.nav);
  switch (input.nav) {
    case "top":
      await runInstructions(topInstructions, config);
      // const next = {
      //   prompt: nav,
      //   callback: setupCallback,
      //   config
      // };
      // return next;
      break;
    // case "left":
    //   runInstructions(leftInstructions, config);
    //   // const next = {
    //   //   prompt: nav,
    //   //   callback: setupCallback,
    //   //   config
    //   // };
    //   // return next;
    //   break;
    default:
      throw new Error("Framework is required.");
  }
}
