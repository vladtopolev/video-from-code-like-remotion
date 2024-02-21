const puppeteer = require('puppeteer');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

const padWithLeadingZero = (num, totalLength) => String(num).padStart(totalLength, '0');

const runPuppeteer = async (projectPath) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the built React application URL
    await page.goto(`file://${projectPath}`);

    const { duration, fps } = await page.evaluate(() => ({ duration: window.duration, fps: window.fps }));

    for (let i = 0; i < duration * fps; i++) {
        await page.evaluate((frame) => {
            window.setFrame(frame);
        }, i);
        await page.screenshot({
            path: `screenshots/screenshot-${padWithLeadingZero(i, 3)}.jpg`
        });
    }

    ffmpeg('screenshots/screenshot-%03d.jpg')
        .inputOptions(`-framerate ${fps}`)
        .videoFilter('format=yuv420p')
        .output('video.mp4')
        .fps(fps)
        .on('start', function (commandLine) {
            console.log('Spawned Ffmpeg with command: ' + commandLine);
        })
        .run();


    // Close the browser when done
    await browser.close();
};

module.exports = runPuppeteer;
