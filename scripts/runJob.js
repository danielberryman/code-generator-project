const fs = require("fs");
const { exec } = require("child_process");

async function runJob(jobName, appName, compName) {
  try {
    if (!jobName) {
      throw new Error(
        "please include 1 parameter that matches the name of the job you want to run"
      );
    }

    // Read json file
    const jobsBuffer = fs.readFileSync("./jobs.json");
    const jobsJson = JSON.parse(jobsBuffer);

    // Read and execute job instructions
    for (const job of jobsJson) {
      if (job.name === jobName) {
        for (const instruction of job.instructions) {
          console.log("Handling instruction: ", instruction.name);
          if (instruction.type === "i") {
            console.log("Instruction type=i");

            for (const filePath of instruction.files) {
              const path = filePath.replace(/\$appName/, appName);
              console.log("Path: ", path);

              let content = instruction.content.join("");

              if (compName) {
                const titleCaseCompName =
                  compName.charAt(0).toUpperCase() + compName.slice(1);
                content = content.replace(/u\$compName/g, titleCaseCompName);
                content = content.replace(/\$compName/g, compName);
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

            if (compName) {
              const titleCaseCompName =
                compName.charAt(0).toUpperCase() + compName.slice(1);
              command = command.replace(/u\$compName/, titleCaseCompName);
              command = command.replace(/\$compName/, compName);
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
    }
  } catch (err) {
    console.error(err);
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

runJob(process.argv[2], process.argv[3], process.argv[4]);
