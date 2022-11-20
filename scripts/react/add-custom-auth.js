const fs = require("fs");
const { reactCustomAuthNav } = require("../../constants/react");
const path = "./src/compopnents/Nav/Nav.tsx";

try {
  const navBuffer = fs.readFileSync(path);

  const navText = navBuffer.toString();
  const editedContent = text.replace(newContent.ref, newContent.content);
  const editedContent = text.replace(newContent.ref, newContent.content);
  const editedContent = text.replace(newContent.ref, newContent.content);
  fs.writeFileSync(path, editedContent);
} catch (err) {
  console.error(err);
}
