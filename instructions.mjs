import { exec } from "child_process";
import fs from "fs";

export default async function runInstructions(instructions, config) {
  let appName = config.appName ? config.appName : "";
  let componentName = config.componentName ? config.componentName : "";

  if (instructions.requirements.length > 0) {
    for (const requirement of instructions.requirements) {
      if (config[requirement] === null) {
        throw new Error("Missing required CLI parameter: " + requirement);
      }
    }
  }

  for (const instruction of instructions.instructions) {
    console.log("Step: " + instruction.name);
    if (instruction.type === "i") {
      console.log("Instruction type=i");

      for (const filePath of instruction.files) {
        const path = filePath.replace(/\$appName/, appName);

        let content = instruction.content;

        if (componentName) {
          const titleCaseComponentName =
            componentName.charAt(0).toUpperCase() + componentName.slice(1);
          content = content.replace(
            /u\$componentName/g,
            titleCaseComponentName
          );
          content = content.replace(/\$componentName/g, componentName);
        }

        const fileBuffer = fs.readFileSync(path);
        const fileText = fileBuffer.toString();
        const editedText = fileText.replace(instruction.key, content);
        fs.writeFileSync(path, editedText);
      }
    } else if (instruction.type === "e") {
      console.log("Instruction type=e");

      let command = instruction.command;
      command = command.replace(/\$appName/, appName);

      if (componentName) {
        console.log("componentName=", componentName);
        const titleCaseComponentName =
          componentName.charAt(0).toUpperCase() + componentName.slice(1);
        command = command.replace(/u\$componentName/, titleCaseComponentName);
        command = command.replace(/\$componentName/, componentName);
      }
      console.log("Command: ", command);

      await runCommand(command);
    } else {
      console.log(
        `Instruction with name=${instruction.name} - type "${instruction.type}" not valid`
      );
    }
  }
}

async function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject(error);
      }
      resolve(stdout);
    });
  });
}
