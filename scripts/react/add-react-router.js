const fs = require('fs');
const { 
    reactRouterApp,
    reactRouterMain
} = require('../../constants/react');
const appPath = './src/App.tsx';
const mainPath = './src/main.tsx';

try {
    const appBuffer = fs.readFileSync(appPath);
    let appCode = appBuffer.toString();
    appCode = appCode.replace(reactRouterApp.ref1, reactRouterApp.content1);
    appCode = appCode.replace(reactRouterApp.ref2, reactRouterApp.content2);
    fs.writeFileSync(appPath, appCode);

    const mainBuffer = fs.readFileSync(mainPath);
    let mainCode = mainBuffer.toString();
    mainCode = mainCode.replace(reactRouterMain.ref1, reactRouterMain.content1);
    mainCode = mainCode.replace(reactRouterMain.ref2, reactRouterMain.content2);
    fs.writeFileSync(mainPath, mainCode);
} catch (err) {
    console.error(err);
}