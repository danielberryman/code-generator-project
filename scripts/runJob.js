const fs = require('fs');

try {
    if (!process.argv[2]) {
        throw new Error("please include 1 parameter that matches the name of the job you want to run")
    }

    // Read json file   
    const jobsBuffer = fs.readFileSync('./jobs.json');
    const jobsJson = JSON.parse(jobsBuffer);

    // Read and execute job instructions
    for (const job of jobsJson) {
        if (job.name === process.argv[2]) {
            for (const instruction of job.instructions) {
                for (const filePath of instruction.files) {
                    const fileBuffer = fs.readFileSync(filePath);
                    const fileText = fileBuffer.toString();
                    const editedText = fileText.replace(new RegExp(instruction.key, "g"), instruction.content.join(""));
                    fs.writeFileSync(filePath, editedText);
                }
            }
        }
    }
} catch (err) {
    console.error(err);
}