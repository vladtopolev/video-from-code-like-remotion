# Prerequisites

This repository explains how to implement the lightweight version of Remotion and allows to create a video from the animation scene created with ReactJS.

Project uses such tools as Puppeteer, FFmpeg.

Server builds a ReactJS project that includes the animated scene and it runs with headless Puppeteer that simulates behavior of Chrome browser. Server creates screenshots for each frame and aftewards FFmpeg creates a final video from captured screenshots.

# Description

The project is presented as monorepo and the main animated scene may be found in `packages/web/src/index.tsx`.

# Run project

```
yarn install
yarn server
```

After that you may find:

- a build project in folder
  all captured screenshots in a folder `packages/server/dist`
- captured screenshots in folder `packages/server/screenshots`
- the final video will be available with path `packages/server/video.mp4`
