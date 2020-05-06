const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs-extra');

const MEDIA_URL = process.env["NODE_ENV"] === "development" 
        ? 'http://localhost:4102'
        : "https://example.com/cdn";

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