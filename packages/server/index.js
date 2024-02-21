const bundleProject = require('./functions/bundleProject');
const runPuppeteer = require('./functions/runPuppeteer');


const runProject = async () => {
    const pathProject = await bundleProject('../web/src/index.tsx');
    await runPuppeteer(pathProject);
}

runProject();
