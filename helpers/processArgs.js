const config = {
  technology: null,
  fileName: null,
  version: null,
  appName: null,
  componentName: null,
};

function processArgs(args) {
  for (const arg of args) {
    let equalsIndex = arg.indexOf("=");
    let argName = arg.slice(0, equalsIndex);
    let value = arg.slice(equalsIndex + 1);
    switch (argName) {
      case "technology":
        config.technology = value;
        break;
      case "fileName":
        config.fileName = value;
        break;
      case "version":
        config.version = value;
        break;
      case "appName":
        config.appName = value;
        break;
      case "componentName":
        config.componentName = value;
        break;
      default:
        break;
    }
  }
  return config;
}

module.exports = processArgs;
