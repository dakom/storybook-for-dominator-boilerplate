const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const fs = require('fs-extra');

if(!process.env.LOCAL_CDN_DIR || process.env.LOCAL_CDN_DIR === "") {
    console.log("Local CDN: set [LOCAL_CDN_DIR] in .env");
    process.exit(0);
}

const srcPath = path.resolve(process.env.LOCAL_CDN_DIR);

const targetPath = path.resolve(`./dist/storybook-build/_static-media`);

fs.copy(srcPath, targetPath)
  .then(() => console.log('copied media folder'))
  .catch(err => console.error(err))