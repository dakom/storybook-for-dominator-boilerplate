const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs-extra');

const MEDIA_URL = process.env["NODE_ENV"] === "development" 
        ? 'http://localhost:4102'
        : 'https://raw.githubusercontent.com/dakom/storybook-for-dominator-boilerplate/gh-pages/_static-media';
        //: "https://dakom.github.io/storybook-for-dominator-boilerplate/_static-media";

const str = `
@mixin bg_img($path) {
  background-image: url("${MEDIA_URL}/app/ui/" + $path);
}
`;

const targetFile = "./src/css/__auto-generated.scss";

fs.ensureFile(targetFile)
    .then(() => fs.open(targetFile, "w")) 
    .then(file => fs.write(file, str))
    .then(() => "console.log wrote custom css")
    .catch(console.error);