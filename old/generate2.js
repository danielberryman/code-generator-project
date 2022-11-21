const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const processArgs = require("./helpers/processArgs");
const inquirer = require("inquirer");

dotenv.config();
const config = processArgs(process.argv.slice(2));

async function runJob() {
  const { technology, fileName, version, appName, componentName } = config;

  try {
    if (!technology && !fileName && !appName) {
      throw new Error(
        "Missing required CLI parameters: technology; fileName (name of the of job you are using); app directory name"
      );
    }

    // Read json file
    const { job } = require(`./jobs/${technology}/${fileName}`);

    if (job.requirements.length > 0) {
      for (const requirement of job.requirements) {
        if (config[requirement] === null) {
          throw new Error("Missing required CLI parameter: " + requirement);
        }
      }
    }

    // Read and execute job instructions

    for (const instruction of job.instructions) {
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

          console.log(__dirname);

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
  } catch (err) {
    console.error(err);
  }
}

const prompt = [
  {
    name: "Let build!",
    message: "What base technology would you like to use for this project?",
    type: "list",
    choices: ["react", "node"],
  },
];

const callback = function (input) {
  console.log(input);
  // const techJobs = [];
  // for (let job of json[input].next) {
  //     techJobs.push(job.name);
  // }
};

function doStep() {
  inquirer.prompt(prompt).then(callback(input));
}

// Read job.json and offer the user the choice of jobs
// Then iterate down the list choosing and then implementing each file name in the correct app dir
let jobs = [];
for (const job of jobs) {
  // if there's a file then execute the instructions in it
  if (job.file) {
    const { instructions, requirements } = require(job.file);

    if (requirements.length > 0) {
      for (const requirement of requirements) {
        if (config[requirement] === null) {
          throw new Error("Missing required CLI parameter: " + requirement);
        }
      }
    }

    for (const instruction of job.instructions) {
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

          console.log(__dirname);

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

  // if there's a next then recurse
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

generate();
